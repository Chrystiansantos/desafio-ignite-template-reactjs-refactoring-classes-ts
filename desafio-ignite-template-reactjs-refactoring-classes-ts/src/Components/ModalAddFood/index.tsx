import { FormHandles } from '@unform/core';
import { useCallback, useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { Form } from './styles_';
import { Modal } from '../Modal_';
import { Input } from '../Input_';

interface IDishes {
  image: string;
  name: string;
  price: number;
  description: string;
}

interface IModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (data: IDishes) => void;
}

export function ModalAddFood({
  setIsOpen,
  handleAddFood,
  isOpen,
}: IModalAddFoodProps) {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    (data: IDishes) => {
      handleAddFood(data);
      setIsOpen();
    },
    [handleAddFood, setIsOpen],
  );

  return (
    <Modal modalStatus={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

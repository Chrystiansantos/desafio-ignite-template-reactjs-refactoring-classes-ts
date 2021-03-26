import { useCallback, useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { FormHandles } from '@unform/core';
import { Form } from './styles';
import { Modal } from '../Modal_';
import { Input } from '../Input_';

interface IDishes {
  image: string;
  name: string;
  price: number;
  description: string;
}

interface IModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: IDishes;
  handleUpdateFood: (data: IDishes) => void;
}

export function ModalEditFood({
  editingFood,
  isOpen,
  setIsOpen,
  handleUpdateFood,
}: IModalEditFoodProps) {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(
    (data: IDishes) => {
      handleUpdateFood(data);
      setIsOpen();
    },
    [handleUpdateFood, setIsOpen],
  );

  return (
    <Modal modalStatus={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

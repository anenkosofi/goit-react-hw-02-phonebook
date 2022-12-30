import React from 'react';
import { Field, Label, Input } from './Filter.styled';

export function Filter({ value, onChange }) {
  return (
    <Field>
      <Input type="text" value={value} onChange={onChange} placeholder=" " />
      <Label>Find contacts by name</Label>
    </Field>
  );
}

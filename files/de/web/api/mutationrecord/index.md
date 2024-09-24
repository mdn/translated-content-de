---
title: MutationRecord
slug: Web/API/MutationRecord
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("DOM")}}

Das **`MutationRecord`** ist ein schreibgeschütztes Interface, das eine einzelne DOM-Änderung darstellt, die von einem {{domxref("MutationObserver")}} beobachtet wird. Es ist das Objekt im Array, das an den Callback eines {{domxref("MutationObserver")}} übergeben wird.

## Instanzeigenschaften

- {{domxref("MutationRecord.addedNodes")}} {{ReadOnlyInline}}
  - : Die durch eine Mutation hinzugefügten Knoten. Wird eine leere {{domxref("NodeList")}} sein, wenn keine Knoten hinzugefügt wurden.
- {{domxref("MutationRecord.attributeName")}} {{ReadOnlyInline}}
  - : Der Name des geänderten Attributs als Zeichenkette oder `null`.
- {{domxref("MutationRecord.attributeNamespace")}} {{ReadOnlyInline}}
  - : Der Namensraum des geänderten Attributs als Zeichenkette oder `null`.
- {{domxref("MutationRecord.nextSibling")}} {{ReadOnlyInline}}
  - : Das nächste Geschwister der hinzugefügten oder entfernten Knoten oder `null`.
- {{domxref("MutationRecord.oldValue")}} {{ReadOnlyInline}}
  - : Der Wert hängt vom {{domxref("MutationRecord.type")}} ab:
    - Für `attributes` ist es der Wert des geänderten Attributs vor der Änderung.
    - Für `characterData` ist es die Daten des geänderten Knotens vor der Änderung.
    - Für `childList` ist es `null`.
- {{domxref("MutationRecord.previousSibling")}} {{ReadOnlyInline}}
  - : Das vorherige Geschwister der hinzugefügten oder entfernten Knoten oder `null`.
- {{domxref("MutationRecord.removedNodes")}} {{ReadOnlyInline}}
  - : Die durch eine Mutation entfernten Knoten. Wird eine leere {{domxref("NodeList")}} sein, wenn keine Knoten entfernt wurden.
- {{domxref("MutationRecord.target")}} {{ReadOnlyInline}}
  - : Der Knoten, der von der Mutation betroffen ist, abhängig vom `MutationRecord.type`.
    - Für `attributes` ist es das Element, dessen Attribut geändert wurde.
    - Für `characterData` ist es der `CharacterData`-Knoten.
    - Für `childList` ist es der Knoten, dessen Kinder geändert wurden.
- {{domxref("MutationRecord.type")}} {{ReadOnlyInline}}
  - : Eine Zeichenkette, die den Typ der Mutation angibt: `attributes`, wenn es sich um eine Attribut-Mutation handelt, `characterData`, wenn es sich um eine Mutation eines `CharacterData`-Knotens handelt, und `childList`, wenn es sich um eine Mutation des Knotensbaums handelt.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

---
title: MutationRecord
slug: Web/API/MutationRecord
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("DOM")}}

Die **`MutationRecord`**-Schnittstelle ist eine schreibgeschützte Schnittstelle, die eine einzelne DOM-Änderung darstellt, die von einem [`MutationObserver`](/de/docs/Web/API/MutationObserver) beobachtet wurde. Es ist das Objekt innerhalb des Arrays, das an den Rückruf eines [`MutationObserver`](/de/docs/Web/API/MutationObserver) übergeben wird.

## Instanz-Eigenschaften

- [`MutationRecord.addedNodes`](/de/docs/Web/API/MutationRecord/addedNodes) {{ReadOnlyInline}}
  - : Die durch eine Mutation hinzugefügten Knoten. Wird ein leeres [`NodeList`](/de/docs/Web/API/NodeList) sein, wenn keine Knoten hinzugefügt wurden.
- [`MutationRecord.attributeName`](/de/docs/Web/API/MutationRecord/attributeName) {{ReadOnlyInline}}
  - : Der Name des geänderten Attributs als Zeichenkette oder `null`.
- [`MutationRecord.attributeNamespace`](/de/docs/Web/API/MutationRecord/attributeNamespace) {{ReadOnlyInline}}
  - : Der Namensraum des geänderten Attributs als Zeichenkette oder `null`.
- [`MutationRecord.nextSibling`](/de/docs/Web/API/MutationRecord/nextSibling) {{ReadOnlyInline}}
  - : Das nächste Geschwister der hinzugefügten oder entfernten Knoten oder `null`.
- [`MutationRecord.oldValue`](/de/docs/Web/API/MutationRecord/oldValue) {{ReadOnlyInline}}
  - : Der Wert hängt von [`MutationRecord.type`](/de/docs/Web/API/MutationRecord/type) ab:
    - Für `attributes` ist es der Wert des geänderten Attributs vor der Änderung.
    - Für `characterData` ist es die Daten des geänderten Knotens vor der Änderung.
    - Für `childList` ist es `null`.
- [`MutationRecord.previousSibling`](/de/docs/Web/API/MutationRecord/previousSibling) {{ReadOnlyInline}}
  - : Das vorherige Geschwister der hinzugefügten oder entfernten Knoten oder `null`.
- [`MutationRecord.removedNodes`](/de/docs/Web/API/MutationRecord/removedNodes) {{ReadOnlyInline}}
  - : Die durch eine Mutation entfernten Knoten. Wird ein leeres [`NodeList`](/de/docs/Web/API/NodeList) sein, wenn keine Knoten entfernt wurden.
- [`MutationRecord.target`](/de/docs/Web/API/MutationRecord/target) {{ReadOnlyInline}}
  - : Der Knoten, auf den sich die Mutation auswirkte, abhängig von `MutationRecord.type`.
    - Für `attributes` ist es das Element, dessen Attribut geändert wurde.
    - Für `characterData` ist es der `CharacterData`-Knoten.
    - Für `childList` ist es der Knoten, dessen Kinder geändert wurden.
- [`MutationRecord.type`](/de/docs/Web/API/MutationRecord/type) {{ReadOnlyInline}}
  - : Ein Zeichenkette, die den Typ der Mutation darstellt: `attributes`, wenn die Mutation eine Attributmutation war, `characterData`, wenn es eine Mutation an einem `CharacterData`-Knoten war, und `childList`, wenn es eine Mutation an der Knotenstruktur war.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

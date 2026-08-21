---
title: MutationEvent
slug: Web/API/MutationEvent
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("UI Events")}}{{non-standard_header}}

Das **`MutationEvent`** Interface bietet Ereigniseigenschaften, die spezifisch für Änderungen in der Document Object Model (DOM)-Hierarchie und -Knoten sind.

> [!NOTE]
> Die Verwendung von _Mutationsereignissen_ ist problematisch:
>
> - Ihr Design ist [fehlerhaft](https://lists.w3.org/Archives/Public/public-webapps/2011JulSep/0779.html).
> - Das Hinzufügen von DOM-Mutations-Listenern zu einem Dokument [verschlechtert die Leistung erheblich](https://groups.google.com/g/mozilla.dev.platform/c/L0Lx11u5Bvs?pli=1) weiterer DOM-Änderungen an diesem Dokument (macht sie 1,5 bis 7 Mal langsamer!). Zudem wird durch das Entfernen der Listener der Schaden nicht rückgängig gemacht.
> - Sie haben eine schlechte plattformübergreifende Kompatibilität: Safari unterstützt `DOMAttrModified` nicht (siehe [WebKit Bug 8191](https://webkit.org/b/8191)) und Firefox unterstützt keine _Mutation Name Events_ (wie `DOMElementNameChanged` und `DOMAttributeNameChanged`).
>
> Sie wurden zugunsten von [Mutation Observern](/de/docs/Web/API/MutationObserver) veraltet. **Erwägen Sie stattdessen deren Verwendung.**

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten [`UIEvent`](/de/docs/Web/API/UIEvent) und indirekt von [`Event`](/de/docs/Web/API/Event)._

- [`MutationEvent.attrChange`](/de/docs/Web/API/MutationEvent/attrChange) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Gibt an, welche Art von Änderung das `DOMAttrModified` Ereignis ausgelöst hat. Es kann `MODIFICATION` (`1`), `ADDITION` (`2`) oder `REMOVAL` (`3`) sein. Es hat für andere Ereignisse keine Bedeutung und ist dann auf `0` gesetzt.
- [`MutationEvent.attrName`](/de/docs/Web/API/MutationEvent/attrName) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Gibt den Namen des Knotens an, der vom `DOMAttrModified` Ereignis betroffen ist. Es hat für andere Ereignisse keine Bedeutung und ist dann auf den leeren String (`""`) gesetzt.
- [`MutationEvent.newValue`](/de/docs/Web/API/MutationEvent/newValue) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Enthält bei `DOMAttrModified` Ereignissen den neuen Wert des modifizierten [`Attr`](/de/docs/Web/API/Attr) Knotens. Bei `DOMCharacterDataModified` Ereignissen enthält es den neuen Wert des modifizierten [`CharacterData`](/de/docs/Web/API/CharacterData) Knotens. In allen anderen Fällen wird der leere String (`""`) zurückgegeben.
- [`MutationEvent.prevValue`](/de/docs/Web/API/MutationEvent/prevValue) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Enthält bei `DOMAttrModified` Ereignissen den vorherigen Wert des modifizierten [`Attr`](/de/docs/Web/API/Attr) Knotens. Bei `DOMCharacterDataModified` Ereignissen enthält es den vorherigen neuen Wert des modifizierten [`CharacterData`](/de/docs/Web/API/CharacterData) Knotens. In allen anderen Fällen wird der leere String (`""`) zurückgegeben.
- [`MutationEvent.relatedNode`](/de/docs/Web/API/MutationEvent/relatedNode) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Gibt den Knoten an, der mit dem Ereignis in Zusammenhang steht, z. B. den geänderten Knoten innerhalb des Teilbaums für `DOMSubtreeModified`.

## Instanz-Methoden

- [`MutationEvent.initMutationEvent()`](/de/docs/Web/API/MutationEvent/initMutationEvent) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Konstruktor-Methode, die ein neues `MutationEvent` mit den angegebenen Parametern konfiguriert zurückgibt.

## Liste der Mutationsereignisse

Die folgende Liste zeigt alle Mutationsereignisse:

- `DOMAttrModified` (Nicht unterstützt von Safari)
- `DOMAttributeNameChanged` (Nicht unterstützt von Firefox)
- `DOMCharacterDataModified`
- `DOMElementNameChanged` (Nicht unterstützt von Firefox)
- `DOMNodeInserted`
- `DOMNodeInsertedIntoDocument`
- `DOMNodeRemoved`
- `DOMNodeRemovedFromDocument`
- `DOMSubtreeModified`

## Beispiele

Sie können einen Listener für Mutationsereignisse wie folgt mit [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) registrieren:

```js
element.addEventListener("DOMNodeInserted", (event) => {
  // …
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MutationObserver`](/de/docs/Web/API/MutationObserver)

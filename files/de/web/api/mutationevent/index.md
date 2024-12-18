---
title: MutationEvent
slug: Web/API/MutationEvent
l10n:
  sourceCommit: 8583c1238d297609d6db0623aba9070d5c57f330
---

{{APIRef("UI Events")}}{{Deprecated_Header}}{{non-standard_header}}

Die **`MutationEvent`**-Schnittstelle bietet Ereigniseigenschaften, die speziell für Änderungen an der Document Object Model (DOM)-Hierarchie und -Knoten sind.

> [!NOTE]
> Die Verwendung von _Mutation Events_ ist problematisch:
>
> - Ihr Design ist [fehlerhaft](https://lists.w3.org/Archives/Public/public-webapps/2011JulSep/0779.html).
> - Das Hinzufügen von DOM-Mutations-Listenern zu einem Dokument [verschlechtert die Leistung erheblich](https://groups.google.com/g/mozilla.dev.platform/c/L0Lx11u5Bvs?pli=1) bei weiteren DOM-Änderungen in diesem Dokument (macht sie 1,5 - 7 Mal langsamer!). Zudem wird der Schaden durch das Entfernen der Listener nicht rückgängig gemacht.
> - Sie haben eine schlechte Browser-Kompatibilität: Safari unterstützt `DOMAttrModified` nicht (siehe [WebKit-Fehler 8191](https://webkit.org/b/8191)) und Firefox unterstützt keine _Mutation Name Events_ (wie `DOMElementNameChanged` und `DOMAttributeNameChanged`).
>
> Sie wurden zugunsten von [MutationObservern](/de/docs/Web/API/MutationObserver) abgelöst. **Erwägen Sie, stattdessen diese zu verwenden.**

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten [`UIEvent`](/de/docs/Web/API/UIEvent) und indirekt von [`Event`](/de/docs/Web/API/Event)._

- [`MutationEvent.attrChange`](/de/docs/Web/API/MutationEvent/attrChange) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Gibt an, welche Art von Änderung das `DOMAttrModified`-Ereignis ausgelöst hat. Es kann `MODIFICATION` (`1`), `ADDITION` (`2`) oder `REMOVAL` (`3`) sein. Für andere Ereignisse hat es keine Bedeutung und ist dann auf `0` gesetzt.
- [`MutationEvent.attrName`](/de/docs/Web/API/MutationEvent/attrName) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Gibt den Namen des Knotens an, der vom `DOMAttrModified`-Ereignis betroffen ist. Für andere Ereignisse hat es keine Bedeutung und ist dann auf den leeren String (`""`) gesetzt.
- [`MutationEvent.newValue`](/de/docs/Web/API/MutationEvent/newValue) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Enthält bei `DOMAttrModified`-Ereignissen den neuen Wert des geänderten [`Attr`](/de/docs/Web/API/Attr)-Knotens. Bei `DOMCharacterDataModified`-Ereignissen enthält es den neuen Wert des geänderten [`CharacterData`](/de/docs/Web/API/CharacterData)-Knotens. In allen anderen Fällen wird der leere String (`""`) zurückgegeben.
- [`MutationEvent.prevValue`](/de/docs/Web/API/MutationEvent/prevValue) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Enthält bei `DOMAttrModified`-Ereignissen den vorherigen Wert des geänderten [`Attr`](/de/docs/Web/API/Attr)-Knotens. Bei `DOMCharacterDataModified`-Ereignissen enthält es den vorherigen neuen Wert des geänderten [`CharacterData`](/de/docs/Web/API/CharacterData)-Knotens. In allen anderen Fällen wird der leere String (`""`) zurückgegeben.
- [`MutationEvent.relatedNode`](/de/docs/Web/API/MutationEvent/relatedNode) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Gibt den mit dem Ereignis verbundenen Knoten an, wie den geänderten Knoten innerhalb des Teilbaums für `DOMSubtreeModified`.

## Instanz-Methoden

- [`MutationEvent.initMutationEvent()`](/de/docs/Web/API/MutationEvent/initMutationEvent) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Konstruktor-Methode, die ein neues `MutationEvent` mit den angegebenen Parametern konfiguriert zurückgibt.

## Liste der Mutation Events

Die folgende Liste zeigt alle Mutation Events:

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

Sie können einen Listener für Mutation Events mit [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) wie folgt registrieren:

```js
element.addEventListener(
  "DOMNodeInserted",
  (event) => {
    // …
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MutationObserver`](/de/docs/Web/API/MutationObserver)

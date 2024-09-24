---
title: MutationEvent
slug: Web/API/MutationEvent
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die **`MutationEvent`** Schnittstelle bietet Ereigniseigenschaften, die spezifisch für Änderungen an der Document Object Model (DOM) Hierarchie und Knoten sind.

> [!NOTE]
> Der Einsatz von _Mutationsevents_ ist problematisch:
>
> - Ihr Design ist [fehlerhaft](https://lists.w3.org/Archives/Public/public-webapps/2011JulSep/0779.html).
> - Das Hinzufügen von DOM-Mutations-Listenern zu einem Dokument [verschlechtert die Leistung erheblich](https://groups.google.com/g/mozilla.dev.platform/c/L0Lx11u5Bvs?pli=1) weiterer DOM-Änderungen an diesem Dokument (sie werden 1,5 - 7 Mal langsamer!). Zudem wird der Schaden nicht rückgängig gemacht, wenn die Listener entfernt werden.
> - Sie haben eine schlechte plattformübergreifende Kompatibilität: Safari unterstützt `DOMAttrModified` nicht (siehe [WebKit-Bug 8191](https://webkit.org/b/8191)) und Firefox unterstützt keine _Mutation-Name-Events_ (wie `DOMElementNameChanged` und `DOMAttributeNameChanged`).
>
> Sie wurden zugunsten von [Mutation Observern](/de/docs/Web/API/MutationObserver) veraltet. **Bitte ziehen Sie in Betracht, stattdessen diese zu verwenden.**

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil {{domxref("UIEvent")}}, und indirekt von {{domxref("Event")}}._

- {{domxref("MutationEvent.attrChange")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt an, welche Art von Änderung das `DOMAttrModified`-Ereignis ausgelöst hat. Es kann `MODIFICATION` (`1`), `ADDITION` (`2`) oder `REMOVAL` (`3`) sein. Es hat keine Bedeutung für andere Ereignisse und wird dann auf `0` gesetzt.
- {{domxref("MutationEvent.attrName")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt den Namen des Knotens an, der vom `DOMAttrModified`-Ereignis betroffen ist. Es hat keine Bedeutung für andere Ereignisse und wird dann auf den leeren String (`""`) gesetzt.
- {{domxref("MutationEvent.newValue")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Bei `DOMAttrModified`-Ereignissen enthält es den neuen Wert des modifizierten {{domxref("Attr")}} Knotens. Bei `DOMCharacterDataModified`-Ereignissen enthält es den neuen Wert des modifizierten {{domxref("CharacterData")}} Knotens. In allen anderen Fällen gibt es den leeren String (`""`) zurück.
- {{domxref("MutationEvent.prevValue")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Bei `DOMAttrModified`-Ereignissen enthält es den vorherigen Wert des modifizierten {{domxref("Attr")}} Knotens. Bei `DOMCharacterDataModified`-Ereignissen enthält es den vorherigen neuen Wert des modifizierten {{domxref("CharacterData")}} Knotens. In allen anderen Fällen gibt es den leeren String (`""`) zurück.
- {{domxref("MutationEvent.relatedNode")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt den Knoten an, der mit dem Ereignis in Verbindung steht, wie den geänderten Knoten im Unterbaum für `DOMSubtreeModified`.

## Instanz-Methoden

- {{domxref("MutationEvent.initMutationEvent()")}} {{Deprecated_Inline}}
  - : Konstruktor-Methode, die ein neues `MutationEvent` zurückgibt, das mit den angegebenen Parametern konfiguriert ist.

## Liste der Mutationsevents

Die folgende Liste enthält alle Mutationsevents:

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

Sie können einen Listener für Mutationsevents mit {{DOMxRef("EventTarget.addEventListener()")}} wie folgt registrieren:

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

- {{DOMxRef("MutationObserver")}}

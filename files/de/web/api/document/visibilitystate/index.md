---
title: "Document: visibilityState-Eigenschaft"
short-title: visibilityState
slug: Web/API/Document/visibilityState
l10n:
  sourceCommit: 14a752ccdcaa736e8e368156c48bca61a3c1e5ed
---

{{ApiRef("DOM")}}

Die **`Document.visibilityState`** schreibgeschützte Eigenschaft gibt die Sichtbarkeit des Dokuments zurück. Sie kann verwendet werden, um zu überprüfen, ob das Dokument im Hintergrund oder in einem minimierten Fenster ist oder anderweitig für den Benutzer nicht sichtbar ist.

Wenn sich der Wert dieser Eigenschaft ändert, wird das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis an das [`Document`](/de/docs/Web/API/Document) gesendet.

Die [`Document.hidden`](/de/docs/Web/API/Document/hidden)-Eigenschaft bietet eine alternative Möglichkeit, um festzustellen, ob die Seite versteckt ist.

## Wert

Ein String mit einem der folgenden Werte:

- `visible`
  - : Der Seiteninhalt kann zumindest teilweise sichtbar sein. In der Praxis bedeutet dies, dass die Seite die Vordergrund-Registerkarte eines nicht minimierten Fensters ist.
- `hidden`
  - : Der Seiteninhalt ist für den Benutzer nicht sichtbar. In der Praxis bedeutet dies, dass das Dokument entweder eine Hintergrund-Registerkarte oder Teil eines minimierten Fensters ist oder die Betriebssystem-Bildschirmsperre aktiv ist.

## Beispiele

```js
document.addEventListener("visibilitychange", () => {
  console.log(document.visibilityState);
  // Modify behavior…
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.hidden`](/de/docs/Web/API/Document/hidden)
- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)

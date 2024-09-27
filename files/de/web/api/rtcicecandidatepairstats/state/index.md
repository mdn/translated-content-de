---
title: "RTCIceCandidatePairStats: state-Eigenschaft"
short-title: state
slug: Web/API/RTCIceCandidatePairStats/state
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die **`state`**-Eigenschaft ist ein String, der den Status der Checkliste angibt, deren Mitglied das Kandidatenpaar ist.

## Wert

Ein String, dessen Wert einer der folgenden ist:

- `failed`
  - : Eine Überprüfung dieses Paares wurde durchgeführt, ist jedoch fehlgeschlagen. Ein Fehler kann entweder auftreten, weil keine Antwort empfangen wurde, oder weil die Antwort darauf hinwies, dass ein nicht behebbare Fehler aufgetreten ist.
- `frozen`
  - : Für dieses Kandidatenpaar wurde noch keine Überprüfung durchgeführt, und die Durchführung der Überprüfung ist blockiert, bis eine andere Überprüfung erfolgreich ist. Sobald diese Prüfung erfolgreich war, wird dieses Paar aufgetaut und geht in den `waiting`-Status über.
- `in-progress`
  - : Eine Überprüfung für dieses Paar wurde initiiert, aber die Transaktion der Überprüfung ist noch im Gange.
- `succeeded`
  - : Eine Überprüfung für dieses Paar wurde erfolgreich abgeschlossen.
- `waiting`
  - : Dieses Paar wurde noch nicht überprüft, aber die Überprüfung kann durchgeführt werden, sobald dieses Paar das verbleibende Paar mit der höchsten Priorität im `waiting`-Status ist.

## ICE-Checklisten

Während der ICE-Verhandlung erstellt die ICE-Schicht eine _Checkliste_, eine Liste potenzieller Paarungen von ICE-Kandidaten. Jedes Paar hat einen Status, der durch ein String-Literal dargestellt wird.

![Ein Diagramm, das zeigt, wie sich die Zustände von ICE-Kandidatenpaaren ändern, wenn die Checkliste analysiert wird](ice-check-list-states.svg)

Wenn ein Kandidatenpaar zur Checkliste hinzugefügt wird, beginnt es im `frozen`-Status. Sobald keine laufenden Prüfungen mehr vorhanden sind, die das Paar daran hindern, analysiert zu werden, wird es aufgetaut und wechselt in den `waiting`-Status. Dies kann sofort geschehen, sobald es zur Checkliste hinzugefügt wurde.

Jedes Mal, wenn ein Kandidatenpaar überprüft wird, wechselt das nächst höchste Prioritätspaar auf der Checkliste vom `waiting`-Status in den `in-progress`-Status und seine Prüfung beginnt. Wenn die Überprüfung aus irgendeinem Grund fehlschlägt, wechselt das Paar in seinen Endzustand, `failed`. Wenn die Überprüfung erfolgreich ist, endet das Paar im `succeeded`-Status. Der ICE-Checklistenstatus für ein gegebenes Paar von ICE-Kandidaten kann in der entsprechenden `state`-Eigenschaft gefunden werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

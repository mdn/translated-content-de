---
title: "RTCIceCandidatePairStats: Eigenschaft state"
short-title: state
slug: Web/API/RTCIceCandidatePairStats/state
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die **`state`**-Eigenschaft ist ein String, der den Zustand der Checkliste angibt, zu der das Kandidatenpaar gehört.

## Wert

Ein String, dessen Wert einer der folgenden ist:

- `failed`
  - : Ein Überprüfung für dieses Paar wurde durchgeführt, ist jedoch fehlgeschlagen. Ein Fehler kann entweder auftreten, weil keine Antwort erhalten wurde, oder weil die Antwort anzeigte, dass ein nicht wiederherstellbarer Fehler aufgetreten ist.
- `frozen`
  - : Für dieses Kandidatenpaar wurde noch keine Überprüfung durchgeführt, und die Durchführung der Überprüfung ist blockiert, bis eine andere Überprüfung erfolgreich ist. Sobald diese Überprüfung erfolgreich ist, wird dieses Paar entblockt und geht in den `waiting`-Zustand über.
- `in-progress`
  - : Eine Überprüfung für dieses Paar wurde initiiert, aber die Transaktion der Überprüfung ist noch im Gange.
- `succeeded`
  - : Eine Überprüfung für dieses Paar wurde erfolgreich abgeschlossen.
- `waiting`
  - : Dieses Paar wurde noch nicht überprüft, aber die Überprüfung kann durchgeführt werden, sobald dieses Paar das verbleibende Paar mit der höchsten Priorität im `waiting`-Zustand ist.

## ICE-Checklisten

Während der ICE-Verhandlung erstellt die ICE-Schicht eine _Checkliste_, die eine Liste potenzieller Paarungen von ICE-Kandidaten ist. Jedes Paar hat einen Zustand, der durch ein String-Literal dargestellt wird.

![Ein Diagramm, das zeigt, wie ICE-Kandidatenpaare den Zustand ändern, während die Checkliste analysiert wird](ice-check-list-states.svg)

Wenn ein Kandidatenpaar zur Checkliste hinzugefügt wird, beginnt es im `frozen`-Zustand. Sobald keine Überprüfungen mehr im Gange sind, die das Paar daran hindern, analysiert zu werden, wird es entblockt und geht in den `waiting`-Zustand über. Dies kann sofort geschehen, sobald es zur Checkliste hinzugefügt wird.

Jedes Mal, wenn ein Kandidatenpaar überprüft wird, wechselt das nächst-höchste Prioritätspaar auf der verbleibenden Checkliste vom `waiting`-Zustand in den `in-progress`-Zustand, und seine Überprüfung beginnt. Wenn die Überprüfung aus irgendeinem Grund fehlschlägt, wechselt das Paar in seinen endgültigen Zustand, `failed`. Wenn die Überprüfung erfolgreich ist, endet das Paar im `succeeded`-Zustand. Der ICE-Checklisten-Zustand für ein bestimmtes Paar von ICE-Kandidaten kann in der entsprechenden `state`-Eigenschaft gefunden werden.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

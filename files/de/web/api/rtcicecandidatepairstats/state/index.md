---
title: "RTCIceCandidatePairStats: state-Eigenschaft"
short-title: state
slug: Web/API/RTCIceCandidatePairStats/state
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die **`state`**-Eigenschaft ist ein Zeichenfolge, die den Zustand der Checkliste angibt, zu der das Kandidatenpaar gehört.

## Wert

Eine Zeichenfolge, deren Wert einer der folgenden ist:

- `failed`
  - : Ein Check für dieses Paar wurde durchgeführt, ist aber fehlgeschlagen. Ein Fehler kann auftreten, entweder weil keine Antwort empfangen wurde oder weil die Antwort angezeigt hat, dass ein nicht behebbarer Fehler aufgetreten ist.
- `frozen`
  - : Für dieses Kandidatenpaar wurde noch kein Check durchgeführt, und der Check ist blockiert, bis ein anderer Check erfolgreich ist. Sobald dieser Check erfolgreich war, wird dieses Paar enteist und wechselt in den `waiting`-Zustand.
- `in-progress`
  - : Ein Check wurde für dieses Paar initiiert, aber die Transaktion des Checks ist noch im Gange.
- `succeeded`
  - : Ein Check für dieses Paar wurde erfolgreich abgeschlossen.
- `waiting`
  - : Dieses Paar wurde noch nicht geprüft, aber der Check kann durchgeführt werden, sobald dieses Paar das höchste verbleibende Paar im `waiting`-Zustand ist.

## ICE-Checklisten

Während der ICE-Negotiation baut die ICE-Schicht eine _Checkliste_ auf, die eine Liste potenzieller Paarungen von ICE-Kandidaten darstellt. Jedes Paar hat einen Zustand, der durch ein Zeichenfolgen-Literal dargestellt wird.

![Ein Diagramm, das zeigt, wie sich die Zustände von ICE-Kandidatenpaaren ändern, während die Checkliste analysiert wird](ice-check-list-states.svg)

Wenn ein Kandidatenpaar zur Checkliste hinzugefügt wird, beginnt es im `frozen`-Zustand. Sobald keine Checks mehr am Laufen sind, die das Paar daran hindern, analysiert zu werden, wird es enteist und wechselt in den `waiting`-Zustand. Dies kann sofort beim Hinzufügen zur Checkliste geschehen.

Jedes Mal, wenn ein Kandidatenpaar überprüft wird, wechselt das nächsthöhere Prioritätenpaar in der Checkliste aus dem `waiting`-Zustand in den `in-progress`-Zustand, und sein Check beginnt. Wenn der Check aus irgendeinem Grund fehlschlägt, wechselt das Paar in seinen Endzustand, `failed`. Wenn der Check erfolgreich ist, erreicht das Paar den `succeeded`-Zustand. Der ICE-Checklisten-Zustand für ein Paar von ICE-Kandidaten kann in der entsprechenden `state`-Eigenschaft gefunden werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

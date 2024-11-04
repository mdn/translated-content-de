---
title: "RTCIceCandidatePairStats: state-Eigenschaft"
short-title: state
slug: Web/API/RTCIceCandidatePairStats/state
l10n:
  sourceCommit: 2c2b213b9a7d391732c94dd35928edf9ff34d8ed
---

{{APIRef("WebRTC")}}

Die **`state`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs zeigt den Status der [Checkliste](#ice-checklisten) an, deren Mitglied das Kandidatenpaar ist.

## Wert

Ein String, dessen Wert einer der folgenden ist:

- `failed`
  - : Eine Überprüfung für dieses Paar wurde durchgeführt, ist jedoch fehlgeschlagen.
    Ein Fehler kann auftreten, entweder weil keine Antwort empfangen wurde oder weil die Antwort darauf hinwies, dass ein nicht behebbarer Fehler aufgetreten ist.
- `frozen`
  - : Für dieses Kandidatenpaar wurde noch keine Überprüfung durchgeführt, und die Durchführung der Überprüfung wird blockiert, bis eine andere Überprüfung erfolgreich ist.
    Sobald diese Überprüfung erfolgreich war, wird dieses Paar aufgetaut und wechselt in den `waiting`-Status.
- `in-progress`
  - : Eine Überprüfung für dieses Paar wurde gestartet, aber die Transaktion der Überprüfung ist noch im Gange.
- `succeeded`
  - : Eine Überprüfung für dieses Paar wurde erfolgreich abgeschlossen.
- `waiting`
  - : Dieses Paar wurde noch nicht überprüft, aber die Überprüfung kann durchgeführt werden, sobald dieses Paar das höchstpriorisierte verbleibende Paar im `waiting`-Status ist.

## Beschreibung

### ICE-Checklisten

Während der ICE-Verhandlung erstellt die ICE-Schicht eine _Checkliste_, die eine Liste von möglichen Paarungen von ICE-Kandidaten ist.
Jedes Paar hat einen Status, der durch einen Zeichenfolgenliteral dargestellt wird.

![Ein Diagramm, das zeigt, wie sich ICE-Kandidatenpaare in ihrem Zustand ändern, während die Checkliste analysiert wird](ice-check-list-states.svg)

Wenn ein Kandidatenpaar zur Checkliste hinzugefügt wird, beginnt es im `frozen`-Zustand.
Sobald keine Überprüfungen im Gange sind, die das Paar daran hindern, analysiert zu werden, wird es aufgetaut und wechselt in den `waiting`-Status.
Dies kann sofort geschehen, wenn das Paar zur Checkliste hinzugefügt wird.

Jedes Mal, wenn ein Kandidatenpaar überprüft wird, wechselt das nächsthöchst priorisierte verbleibende Kandidatenpaar auf der Checkliste vom `waiting`-Status in den `in-progress`-Status und seine Überprüfung beginnt.
Wenn die Überprüfung aus irgendeinem Grund fehlschlägt, wechselt das Paar in seinen Endzustand `failed`.
Wenn die Überprüfung erfolgreich ist, endet das Paar im `succeeded`-Status.
Der ICE-Checklistenstatus für ein bestimmtes Paar von ICE-Kandidaten kann in der entsprechenden `state`-Eigenschaft gefunden werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

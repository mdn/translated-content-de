---
title: "`browsingContext.navigationFailed`-Ereignis"
short-title: navigationFailed
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationFailed
l10n:
  sourceCommit: 15f8fef84c7b7e800eaad84301fdb4b4f9cb80a2
---

Das `browsingContext.navigationFailed`-[Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext)-Moduls wird ausgelöst, wenn eine Navigation über Dokumentengrenzen hinweg blockiert wird.

## Ereignisdaten

Das `params`-Feld in der Ereignisbenachrichtigung ist ein Objekt mit den folgenden Feldern:

- `context`
  - : Ein String, der die ID des Kontexts enthält, in dem die Navigation fehlgeschlagen ist.
- `navigation`
  - : Ein String, der die {{Glossary("UUID", "UUID")}} enthält, die diese Navigation eindeutig identifiziert.
    Wenn die Navigation mit dem Befehl [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) oder [`browsingContext.reload`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) gestartet wurde, entspricht diese ID dem `navigation`-Wert in der Antwort des Befehls.
    Dieselbe ID wird von allen Ereignissen geteilt, die sich auf diese Navigation beziehen, einschließlich anderer Navigationsereignisse im [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#events)-Modul und Ereignissen im [`network`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network)-Modul.
- `timestamp`
  - : Eine nichtnegative Ganzzahl, die den Zeitpunkt darstellt, zu dem das Ereignis ausgelöst wurde, in Millisekunden seit dem [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
- `url`
  - : Ein String, der die geladene URL enthält.

## Beschreibung

Im Lebenszyklus einer Navigation wird dieses Ereignis ausgelöst, wenn die Navigation blockiert wird, zum Beispiel aufgrund einer Sicherheits- oder CSP-Beschränkung oder weil der Client das Entladen-Abfragefenster abbricht.

## Beispiele

### Empfang eines Ereignisses, wenn eine Navigation über Dokumentengrenzen hinweg blockiert wird

Angenommen, Sie haben eine [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) mit einem [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `browsingContext.navigationFailed`.
Die `unhandledPromptBehavior`-Fähigkeit der Sitzung ist so konfiguriert, dass [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Abfragen verworfen werden.
Die aktuelle Seite hat auch einen `beforeunload`-Handler, der [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um vor dem Verlassen zu warnen.

Angenommen, es gibt nicht gespeicherte Änderungen auf dieser Seite und Sie verwenden [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) um eine andere URL zu laden.

Der Browser öffnet das `beforeunload`-Abfragefenster, löst ein [`browsingContext.navigationStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted)-Ereignis aus und blockiert die Navigation.
Der Browser sendet die folgende Benachrichtigung, wobei der `context`-Wert der Kontext-ID entspricht, die Sie `browsingContext.navigate` übergeben haben, und der `navigation`-Wert die ID der blockierten Navigation ist:

```json
{
  "type": "event",
  "method": "browsingContext.navigationFailed",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "navigation": "a1b2c3d4-5678-90ab-cdef-1234567890ab",
    "timestamp": 1712345678901
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`browsingContext.navigationStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted)-Ereignis
- [`browsingContext.navigationCommitted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationCommitted)-Ereignis

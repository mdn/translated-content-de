---
title: "`browsingContext.navigationStarted` Ereignis"
short-title: navigationStarted
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted
l10n:
  sourceCommit: 15f8fef84c7b7e800eaad84301fdb4b4f9cb80a2
---

Das `browsingContext.navigationStarted` [Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext)-Moduls wird ausgelöst, wenn eine Navigation über Dokumentgrenzen hinweg in einem [Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) beginnt.

## Ereignisdaten

Das `params`-Feld in der Ereignisbenachrichtigung ist ein Objekt mit den folgenden Feldern:

- `context`
  - : Ein String, der die ID des Kontexts enthält, in dem die Navigation beginnt.
- `navigation`
  - : Ein String, der die {{Glossary("UUID", "UUID")}} enthält, die diese Navigation eindeutig identifiziert.
    Falls die Navigation mittels des Befehls [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) oder [`browsingContext.reload`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) gestartet wurde, stimmt diese ID mit dem `navigation`-Wert in der Antwort des Befehls überein.
    Die gleiche ID wird von allen Ereignissen geteilt, die sich auf diese Navigation beziehen, einschließlich anderer Navigationsevents im [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#events)-Modul und Events im [`network`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network)-Modul.
- `timestamp`
  - : Eine nicht-negative Ganzzahl, die die Zeit repräsentiert, zu der das Ereignis ausgelöst wurde, in Millisekunden seit dem [epoch](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
- `url`
  - : Ein String, der die geladene URL enthält.

## Beschreibung

Die Navigation zu einer anderen Seite kann durch den Befehl [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) oder [`browsingContext.reload`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload), durch Benutzerinteraktion mit Elementen auf der Seite oder durch JavaScript, das im Kontext der Seite ausgeführt wird, ausgelöst werden.

Für Navigationsvorgänge über Dokumentgrenzen hinweg ist dies das erste Ereignis in der Sequenz und wird ausgelöst, wenn der Browser beginnt, die URL zu laden.
Wenn die Navigation erfolgreich ist, wird als Nächstes [`browsingContext.navigationCommitted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationCommitted) ausgelöst, wenn der Browser die Antwort akzeptiert hat und mit dem Laden der neuen Seite beginnt.
Danach wird [`browsingContext.domContentLoaded`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/domContentLoaded) ausgelöst, wenn das HTML analysiert wurde, und [`browsingContext.load`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/load) wird zuletzt ausgelöst, wenn das Dokument und alle seine untergeordneten Ressourcen vollständig geladen sind.
Wenn die Navigation fehlschlägt, wird stattdessen [`browsingContext.navigationFailed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationFailed) ausgelöst.

> [!NOTE]
> Dieses Ereignis wird nicht ausgelöst, wenn die anfängliche `about:blank`-Seite für einen neuen obersten Browsing-Kontext geladen wird.

Dieses Ereignis wird nicht für identische Dokumentnavigationen ausgelöst.
Für Navigationen zu einem URL-Fragment siehe [`browsingContext.fragmentNavigated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/fragmentNavigated).
Für URL-Änderungen, die über die History API ohne vollständige Navigation vorgenommen werden, siehe [`browsingContext.historyUpdated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/historyUpdated).

## Beispiele

### Empfang eines Ereignisses, wenn eine Navigation über Dokumentgrenzen hinweg beginnt

Angenommen, Sie haben eine [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) mit einem [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `browsingContext.navigationStarted`.

Angenommen, Sie verwenden [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate), um `https://example.com` zu laden und übergeben die Kontext-ID, die Sie von [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) erhalten haben.

Der Browser sendet folgende Benachrichtigung, wobei der `context`-Wert mit der Kontext-ID übereinstimmt, die Sie an `browsingContext.navigate` übergeben haben:

```json
{
  "type": "event",
  "method": "browsingContext.navigationStarted",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "navigation": "a1b2c3d4-5678-90ab-cdef-1234567890ab",
    "timestamp": 1781646423959,
    "url": "https://example.com"
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`browsingContext.navigationCommitted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationCommitted) Ereignis
- [`browsingContext.navigationFailed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationFailed) Ereignis
- [`browsingContext.fragmentNavigated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/fragmentNavigated) Ereignis
- [`browsingContext.historyUpdated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/historyUpdated) Ereignis

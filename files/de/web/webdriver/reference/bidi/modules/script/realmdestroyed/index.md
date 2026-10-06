---
title: "`script.realmDestroyed`-Ereignis"
short-title: realmDestroyed
slug: Web/WebDriver/Reference/BiDi/Modules/script/realmDestroyed
l10n:
  sourceCommit: 7124ff73f982c7cd1882e5056e849443116f0333
---

Das [Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) `script.realmDestroyed` des Moduls [`script`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script) wird ausgelöst, wenn die [Realm](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#realms) eines Dokuments, Workers oder Worklets zerstört wird.

## Ereignisdaten

Das Feld `params` in der Ereignisbenachrichtigung ist ein Objekt mit folgendem Feld:

- `realm`
  - : Eine Zeichenfolge mit der ID der zerstörten Realm.

## Beschreibung

Verwenden Sie dieses Ereignis zusammen mit [`script.realmCreated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmCreated), um die Lebensdauer von JavaScript-Realms zu überwachen.

Dieses Ereignis wird ausgelöst, wenn ein Dokument entladen wird. Das geschieht, wenn sein [Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) zu einem neuen Dokument navigiert oder geschlossen wird.
Beim Entladen eines Dokuments werden sowohl die Realm des Dokuments als auch die Realms seiner Worklets zerstört. Das Ereignis wird daher für jede dieser Realms einmal ausgelöst.
Das Ereignis wird auch ausgelöst, wenn ein Worker das Ende seines Lebenszyklus erreicht oder beendet wird.

Die Ereignisdaten enthalten nur die Realm-ID.
Wenn Sie feststellen müssen, zu welchem Kontext oder Worker die Realm gehörte, gleichen Sie diese ID mit den Realm-Informationen ab, die Sie zuvor von [`script.realmCreated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmCreated) erhalten oder mit [`script.getRealms`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/getRealms) abgerufen haben.

Nachdem dieses Ereignis ausgelöst wurde, ist die ID der zerstörten Realm nicht mehr gültig. Auch die Objekte der Realm werden bei ihrer Zerstörung freigegeben. Sie müssen sie daher nicht mit [`script.disown`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/disown) freigeben.

Anders als [`script.realmCreated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmCreated) wird dieses Ereignis nie nachträglich gesendet. Es wird nur für Realms ausgelöst, die zerstört werden, nachdem Sie das Ereignis abonniert haben.

## Beispiele

### Realms während einer Navigation nachverfolgen

Angenommen, Sie haben eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), in der Sie sowohl `script.realmDestroyed` als auch [`script.realmCreated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmCreated) [abonniert](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) haben.

Angenommen, ein Tab ist unter `https://example.com` geöffnet und Sie verwenden [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate), um den Kontext zu `https://example.org` zu navigieren.

Der Browser sendet zuerst die folgende Benachrichtigung über die zerstörte Realm des vorherigen Dokuments:

```json
{
  "type": "event",
  "method": "script.realmDestroyed",
  "params": {
    "realm": "7c37f4c0-abcd-1234-ef56-789012345678"
  }
}
```

Anschließend sendet er die folgende Benachrichtigung über die Realm des neuen Dokuments:

```json
{
  "type": "event",
  "method": "script.realmCreated",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "origin": "https://example.org",
    "realm": "2b8e6d41-0f9a-4c3b-8d7e-1a2b3c4d5e6f",
    "type": "window"
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Befehl [`script.disown`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/disown)
- Befehl [`script.getRealms`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/getRealms)
- Ereignis [`script.realmCreated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmCreated)
- Befehl [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe)

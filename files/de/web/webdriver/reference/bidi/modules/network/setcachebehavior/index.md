---
title: Befehl `network.setCacheBehavior`
short-title: setCacheBehavior
slug: Web/WebDriver/Reference/BiDi/Modules/network/setCacheBehavior
l10n:
  sourceCommit: fd6a5b07ff0cee3eed0540c09e2f49145541dc76
---

Der [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) `network.setCacheBehavior` des Moduls [`network`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network) steuert, ob der Browser bei Anfragen aus allen [Kontexten](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) oder aus bestimmten [Top-Level-Kontexten](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) seinen Cache verwendet oder umgeht.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "network.setCacheBehavior",
  "params": {
    "cacheBehavior": "bypass"
  }
}

/* With required and optional parameters */
{
  "method": "network.setCacheBehavior",
  "params": {
    "cacheBehavior": "bypass",
    "contexts": ["5e5e96e8-5247-4f22-9b35-a4a2d841cbaa"]
  }
}
```

### Parameter

Das Feld `params` enthält:

- `cacheBehavior`
  - : Ein String, der angibt, ob der Browser für Anfragen seinen Cache verwendet.
    Er kann einen der folgenden Werte annehmen:

    - `bypass`: Der Browser liefert Antworten nicht aus seinem Cache; die Anfragen werden an das Netzwerk gesendet.
    - `default`: Der Browser verwendet seinen Cache wie üblich.

- `contexts` {{optional_inline}}
  - : Ein Array aus einem oder mehreren Strings mit Kontext-IDs. Jeder String identifiziert einen [Top-Level-Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context), für den das Cache-Verhalten gelten soll.
    Dieses Cache-Verhalten gilt auch für Anfragen aus untergeordneten Kontexten, etwa iframes.
    Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.

    Wenn `contexts` nicht angegeben wird, gilt das Cache-Verhalten für Anfragen aus allen Kontexten und ersetzt jedes für bestimmte Kontexte festgelegte Cache-Verhalten.

### Rückgabewert

Das Feld `result` in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Ein erforderlicher Parameter fehlt oder ein Parameter hat einen ungültigen Typ.
    - `cacheBehavior` ist weder `bypass` noch `default`.
    - `contexts` ist angegeben, aber leer.
    - Ein in `contexts` angegebener Kontext ist kein Top-Level-Kontext.
- `no such frame`
  - : Es wurde kein Kontext mit einer in `contexts` angegebenen ID gefunden.

## Beschreibung

Ein für bestimmte Kontexte festgelegtes Cache-Verhalten hat Vorrang vor dem Cache-Verhalten, das Sie für alle Kontexte festgelegt haben.
Sie können beispielsweise den Cache für alle Kontexte umgehen und anschließend für einen Tab `default` festlegen, sodass nur dieser Tab den Cache verwendet.
Ein Befehl ohne `contexts` löscht die Einstellungen für einzelne Kontexte und wendet das angegebene Cache-Verhalten auf alle Kontexte an.

Ein für alle Kontexte festgelegtes Cache-Verhalten gilt auch für Kontexte, die nach der Verarbeitung des Befehls erstellt werden. Ein für einen Top-Level-Kontext festgelegtes Cache-Verhalten gilt auch für untergeordnete Kontexte, die später darin erstellt werden.
Das Cache-Verhalten wird von allen Sitzungen gemeinsam genutzt und bleibt wirksam, bis es durch einen weiteren `network.setCacheBehavior`-Befehl geändert wird oder die letzte aktive Sitzung endet.

Um zu prüfen, ob eine Antwort aus dem Cache stammt, [abonnieren](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) Sie eines der Ereignisse, die die Antwort melden ([`network.responseStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted), [`network.responseCompleted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted) oder [`network.authRequired`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/authRequired)), und untersuchen Sie das Feld `fromCache` des Objekts `response`.

## Beispiele

### Den Cache für alle Kontexte umgehen

Angenommen, Sie haben eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection), eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) und ein [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für [`network.responseCompleted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted).

Angenommen, es sind außerdem zwei Tabs geöffnet, in denen jeweils die Seite angezeigt wird, die Sie testen.
Sie haben den zweiten Tab mit [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) geöffnet und dabei seine Kontext-ID erhalten.
Anschließend haben Sie die Seite im zweiten Tab mit [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) geladen.

Nehmen wir an, die getestete Seite ruft eine Ressource ab, die der Browser laut Server eine Stunde lang zwischenspeichern darf.
Beim zweiten Abruf liefert der Browser die Ressource aus seinem Cache. Im Ereignis `network.responseCompleted` ist `fromCache` im Objekt `response` auf `true` gesetzt.

Senden Sie die folgende Nachricht, um den Browser-Cache für alle Kontexte zu umgehen:

```json
{
  "id": 1,
  "method": "network.setCacheBehavior",
  "params": {
    "cacheBehavior": "bypass"
  }
}
```

Der Browser antwortet mit einem leeren `result`-Objekt:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

Ab diesem Zeitpunkt werden Anfragen nach der Ressource aus jedem Tab an den Server gesendet. In den `response`-Objekten der zugehörigen `network.responseCompleted`-Ereignisse ist `fromCache` auf `false` gesetzt.

### Das standardmäßige Cache-Verhalten wiederherstellen

Verwenden Sie dieselbe Verbindung und Sitzung wie im ersten Beispiel und senden Sie die folgende Nachricht, um das standardmäßige Cache-Verhalten des Browsers in allen Kontexten wiederherzustellen:

```json
{
  "id": 2,
  "method": "network.setCacheBehavior",
  "params": {
    "cacheBehavior": "default"
  }
}
```

Der Browser antwortet mit einem leeren `result`-Objekt:

```json
{
  "id": 2,
  "type": "success",
  "result": {}
}
```

Wenn die Ressource noch im Cache liegt und noch gültig ist, liefert der Browser sie wieder aus seinem Cache.
In diesem Fall ist im `response`-Objekt des `network.responseCompleted`-Ereignisses für die nächste Anfrage `fromCache` auf `true` gesetzt.

### Den Cache für einen einzelnen Tab umgehen

Verwenden Sie dieselbe Verbindung, Sitzung und dieselben Tabs wie im ersten Beispiel und senden Sie die folgende Nachricht, um den Cache nur für den zweiten Tab zu umgehen:

```json
{
  "id": 3,
  "method": "network.setCacheBehavior",
  "params": {
    "cacheBehavior": "bypass",
    "contexts": ["5e5e96e8-5247-4f22-9b35-a4a2d841cbaa"]
  }
}
```

Der Browser antwortet mit einem leeren `result`-Objekt:

```json
{
  "id": 3,
  "type": "success",
  "result": {}
}
```

Anfragen aus dem zweiten Tab umgehen nun den Cache, während Anfragen aus dem ersten Tab weiterhin aus dem Cache beantwortet werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Befehl [`network.setExtraHeaders`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/setExtraHeaders)
- Befehl [`browsingContext.reload`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload)
- Befehl [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe)
- Leitfaden zum [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)

---
title: Befehl `script.addPreloadScript`
short-title: addPreloadScript
slug: Web/WebDriver/Reference/BiDi/Modules/script/addPreloadScript
l10n:
  sourceCommit: eb950353cc947fb1c00397334b13a5f9457d734a
---

Der [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) `script.addPreloadScript` des Moduls [`script`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script) registriert und konfiguriert eine Funktion, die vor den eigenen Skripten eines neuen Dokuments ausgeführt wird.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "script.addPreloadScript",
  "params": {
    "functionDeclaration": "() => { console.log('Document created'); }"
  }
}

/* With required and optional parameters */
{
  "method": "script.addPreloadScript",
  "params": {
    "arguments": [
      {
        "type": "channel",
        "value": {
          "channel": "readyStateChannel",
          "ownership": "root",
          "serializationOptions": {
            "includeShadowTree": "open",
            "maxDomDepth": 1,
            "maxObjectDepth": 2
          }
        }
      }
    ],
    "contexts": ["93ee5bd6-d256-4608-a002-9a8995cc0e5f"],
    "functionDeclaration": "(notify) => { notify(document.readyState); }",
    "sandbox": "myAutomationSandbox"
  }
}
```

### Parameter

Das Feld `params` enthält:

- `arguments` {{optional_inline}}
  - : Ein Array von Objekten, das die Argumente angibt, die an das [Preload-Skript](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#preload_scripts) übergeben werden.
    Der Browser wandelt jedes Objekt in eine Nachrichtenfunktion um und übergibt diese Funktionen in der Reihenfolge des Arrays an das Preload-Skript.
    Jeder Aufruf einer dieser Funktionen sendet ein [`script.message`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/message)-Ereignis an den Client, der es abonniert hat.
    Wenn das Feld fehlt oder leer ist, wird das Preload-Skript ohne Argumente aufgerufen.
    Jedes Objekt enthält die folgenden Felder:
    - `type`
      - : Ein String mit dem Wert `channel`.
    - `value`
      - : Ein Objekt, das den [Kanal](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#channels) konfiguriert.
        Es enthält die folgenden Felder:
        - `channel`
          - : Ein String, der den Kanal in den resultierenden [`script.message`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/message)-Ereignissen identifiziert.
        - `ownership` {{optional_inline}}
          - : Ein String, der angibt, ob der Browser eine Referenz auf das in jeder Nachricht gesendete Objekt behält, damit Sie in späteren Befehlen darauf verweisen können.
            Er kann einen der folgenden Werte annehmen:
            - `none`: Der Browser behält keine Referenz auf das Objekt. Daher enthält das Feld [`data`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/message#data) des `script.message`-Ereignisses kein Feld `handle`.
              Dies ist die Standardeinstellung.
            - `root`: Der Browser hält das Objekt am Leben und fügt dem Feld `data` des Ereignisses ein Feld `handle` hinzu.
              Sie können das Handle im Parameter [`arguments`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction#arguments) von `script.callFunction` übergeben, um in einer anderen Funktion mit demselben Objekt zu arbeiten.
              Geben Sie das Handle mit [`script.disown`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/disown) frei, wenn Sie es nicht mehr benötigen.
              Der Browser gibt Handles auch frei, wenn die Realm zerstört wird.
        - `serializationOptions` {{optional_inline}}
          - : Ein Objekt, das steuert, wie detailliert die Nachrichtendaten sind, wenn der gesendete Wert ein Objekt ist.
            Es kann die folgenden Felder enthalten:
            - `includeShadowTree` {{optional_inline}}
              - : Ein String, der angibt, ob Nachfahren von Shadow-Roots in den Nachrichtendaten enthalten sind, wenn der gesendete Wert ein DOM-Knoten ist.
                Er kann einen der folgenden Werte annehmen:
                - `none`: Nachfahren von Shadow-Roots werden nicht einbezogen.
                  Dies ist die Standardeinstellung.
                - `all`: Nachfahren sowohl offener Shadow-Roots (die von JavaScript außerhalb der Root zugänglich sind) als auch geschlossener Shadow-Roots (die von JavaScript außerhalb der Root nicht zugänglich sind) werden einbezogen.
                - `open`: Nur Nachfahren offener Shadow-Roots werden einbezogen.
            - `maxDomDepth` {{optional_inline}}
              - : Eine nicht negative Ganzzahl oder `null` für unbegrenzt, die angibt, wie viele Ebenen von Nachfahrenknoten in den Nachrichtendaten enthalten sind.
                Der Standardwert ist `0`; damit werden Nachfahren ausgeschlossen.
                Diese Begrenzung gilt auch für Nachfahren von Shadow-Roots, die über `includeShadowTree` einbezogen werden.
            - `maxObjectDepth` {{optional_inline}}
              - : Eine nicht negative Ganzzahl oder `null` für unbegrenzt, die angibt, wie viele Ebenen verschachtelter Objekte in den Nachrichtendaten enthalten sind.
                Der Standardwert ist `null`.
- `contexts` {{optional_inline}}
  - : Ein Array mit einem oder mehreren Kontext-ID-Strings, das die [Kontexte der obersten Ebene](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) angibt, in denen das Skript ausgeführt wird.
    Das Skript wird auch in den untergeordneten Kontexten dieser Kontexte der obersten Ebene ausgeführt.
    Dieses Feld kann nicht verwendet werden, wenn [`userContexts`](#usercontexts) angegeben ist.
    Wenn sowohl `contexts` als auch `userContexts` fehlen, wird das Skript in allen Kontexten der Sitzung ausgeführt.
    Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.
- `functionDeclaration`
  - : Ein String, der den JavaScript-Quellcode der aufzurufenden Funktion enthält.
    Der Browser wertet den String aus und ruft die resultierende Funktion mit den Werten auf, die im Parameter [`arguments`](#arguments) angegeben sind.
- `sandbox` {{optional_inline}}
  - : Ein String, der den Namen der [Sandbox-Realm](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#sandbox_realms) enthält, in der das Skript ausgeführt wird.
    Wenn die Sandbox-Realm bei der Ausführung des Preload-Skripts noch nicht existiert, erstellt der Browser sie.
    Wenn das Feld fehlt, wird das Skript in der Standard-Realm des Dokuments ausgeführt.
- `userContexts` {{optional_inline}}
  - : Ein Array mit einem oder mehreren Benutzerkontext-ID-Strings, das die [Benutzerkontexte](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) angibt, in denen das Skript ausgeführt wird.
    Das Skript wird in jedem Kontext ausgeführt, der zu diesen Benutzerkontexten gehört, einschließlich später erstellter Kontexte.
    Dieses Feld kann nicht verwendet werden, wenn [`contexts`](#contexts) angegeben ist.
    Benutzerkontext-IDs werden von Befehlen wie [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) oder [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) zurückgegeben.

### Rückgabewert

Das Feld `result` in der Antwort ist ein Objekt mit dem folgenden Feld:

- `script`
  - : Ein String, der die {{Glossary("UUID", "UUID")}} enthält, die das Preload-Skript eindeutig identifiziert.

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Ein erforderlicher Parameter fehlt oder ein Parameter hat einen ungültigen Typ.
    - Sowohl [`contexts`](#contexts) als auch [`userContexts`](#usercontexts) werden in derselben Anfrage angegeben.
    - Eine Kontext-ID in [`contexts`](#contexts) verweist auf einen untergeordneten Kontext statt auf einen Kontext der obersten Ebene.
- `no such frame`
  - : Wird ausgelöst, wenn kein Kontext mit der in `contexts` angegebenen ID gefunden wird.
- `no such user context`
  - : Wird ausgelöst, wenn kein Benutzerkontext mit der in `userContexts` angegebenen ID gefunden wird.

## Beschreibung

Ein [Preload-Skript](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#preload_scripts) wird ausgeführt, wenn in einem durch die Parameter `contexts` oder `userContexts` ausgewählten Kontext ein neues Dokument erstellt wird.
Wenn keiner der beiden Parameter angegeben ist, wird das Preload-Skript in jedem neuen Dokument ausgeführt, das in einem beliebigen Kontext der Sitzung erstellt wird.
Dazu gehören auch untergeordnete Kontexte, etwa solche, die durch {{HTMLElement("iframe")}}-Elemente erstellt werden.
Es wird vor den eigenen Skripten des Dokuments ausgeführt.
Das Hinzufügen eines Preload-Skripts führt es nicht in bereits vorhandenen Dokumenten aus.

Das Preload-Skript bleibt registriert, bis Sie es mit [`script.removePreloadScript`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/removePreloadScript) entfernen oder die Sitzung endet.

Wenn das Preload-Skript aufgrund eines Syntaxfehlers oder einer Laufzeitausnahme fehlschlägt, meldet der Browser die Ausnahme in der Realm, in der es ausgeführt wird.
Diese Fehler sind nicht in der Antwort auf `script.addPreloadScript` enthalten und verhindern nicht die Ausführung anderer Preload-Skripte.

## Beispiele

### URL jedes neuen Dokuments protokollieren

Vorausgesetzt, Sie haben eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Senden Sie die folgende Nachricht, um ein Preload-Skript zu registrieren, das die URL jedes neuen Dokuments in der Konsole protokolliert:

```json
{
  "id": 1,
  "method": "script.addPreloadScript",
  "params": {
    "functionDeclaration": "() => { console.log('Document created:', location.href); }"
  }
}
```

Der Browser antwortet mit der ID des Preload-Skripts wie folgt:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "script": "d4b1a0f6-2a3c-4f7d-9e21-5c6b7a8d9e0f"
  }
}
```

Wenn Sie anschließend einen Kontext zu einem neuen Dokument navigieren, protokolliert das Preload-Skript die URL des Dokuments in der Konsole, bevor die eigenen Skripte des Dokuments ausgeführt werden.

### Eine API in einem Kontext überschreiben

Verwenden Sie dieselbe Verbindung und Sitzung wie im ersten Beispiel und setzen Sie voraus, dass Sie die Kontext-ID eines Tabs mit [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) ermittelt haben.

Angenommen, eine Seite verwendet {{jsxref("Date.now()")}}, um zu prüfen, ob ein Angebot abgelaufen ist.
Das Angebot läuft am 2. Januar 2030 um Mitternacht UTC ab.
Sie möchten prüfen, ob die Seite den abgelaufenen Zustand anzeigt, ohne zu warten, bis die Frist verstrichen ist.
Um einen Zeitpunkt nach Ablauf der Frist zu simulieren, ersetzen Sie `Date.now()` durch eine Funktion, die den Zeitstempel für den 3. Januar 2030 um Mitternacht UTC zurückgibt.

Senden Sie die folgende Nachricht, um diesen Ersatz als Preload-Skript für neue Dokumente in diesem Tab und seinen untergeordneten Kontexten zu registrieren:

```json
{
  "id": 2,
  "method": "script.addPreloadScript",
  "params": {
    "contexts": ["93ee5bd6-d256-4608-a002-9a8995cc0e5f"],
    "functionDeclaration": "() => { Date.now = () => Date.UTC(2030, 0, 3); }"
  }
}
```

Der Browser antwortet mit der ID des Preload-Skripts wie folgt:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "script": "8f2c5d19-6b4e-4a80-b7c3-1d2e3f4a5b6c"
  }
}
```

Nachdem die Registrierung erfolgreich war, navigieren Sie den Tab mit [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) zur Angebotsseite.
Das Preload-Skript ersetzt `Date.now()`, bevor die eigenen Skripte der Seite ausgeführt werden. Wenn die Seite `Date.now()` aufruft, erhält sie daher einen Zeitstempel nach Ablauf der Frist.
So können Sie das Verhalten der Seite nach Ablauf des Angebots testen.

### Daten aus einem Preload-Skript abrufen

Verwenden Sie dieselbe Verbindung und Sitzung wie im ersten Beispiel und abonnieren Sie [`script.message`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/message) mit [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe).

Angenommen, der Client soll die URL des Dokuments empfangen, wenn ein Tab zu `https://example.com/` navigiert.
Konfigurieren Sie einen Kanal namens `newDocumentUrls`, damit das Preload-Skript die URL an den Client senden kann.
Die resultierenden `script.message`-Ereignisse enthalten `newDocumentUrls` in ihrem Feld `channel`, sodass der Client diese URL-Meldungen identifizieren kann.

Senden Sie die folgende Nachricht, um das Preload-Skript zu registrieren und den Kanal zu konfigurieren:

```json
{
  "id": 3,
  "method": "script.addPreloadScript",
  "params": {
    "arguments": [
      {
        "type": "channel",
        "value": {
          "channel": "newDocumentUrls"
        }
      }
    ],
    "functionDeclaration": "(report) => { report(window.location.href); }"
  }
}
```

Der Browser antwortet mit der ID des Preload-Skripts wie folgt:

```json
{
  "id": 3,
  "type": "success",
  "result": {
    "script": "1a2b3c4d-5e6f-4a7b-8c9d-0e1f2a3b4c5d"
  }
}
```

Nachdem die Registrierung erfolgreich war, navigieren Sie einen Tab zu `https://example.com/`.
Wenn das Preload-Skript im neuen Dokument ausgeführt wird, übergibt der Browser ihm eine Nachrichtenfunktion als Argument `report`.
Bevor die eigenen Skripte des Dokuments ausgeführt werden, ruft das Preload-Skript `report()` mit der URL des Dokuments auf.
Der Client empfängt ein [`script.message`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/message)-Ereignis, das die URL des Dokuments, den Kanalnamen `newDocumentUrls` sowie die IDs der Quell-Realm und des Quellkontexts enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Befehl [`script.removePreloadScript`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/removePreloadScript)
- Befehl [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate)
- Ereignis [`script.message`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/message)

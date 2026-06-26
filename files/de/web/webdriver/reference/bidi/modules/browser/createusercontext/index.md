---
title: "`browser.createUserContext` Befehl"
short-title: createUserContext
slug: Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext
l10n:
  sourceCommit: ef8c3806c33f2b1d9d381f4fe3b643b5af5e3d22
---

Der `browser.createUserContext` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`browser`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser) Moduls erstellt einen neuen [Benutzerkontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) im Browser.

## Syntax

```json-nolint
/* Without optional parameters */
{
  "method": "browser.createUserContext",
  "params": {}
}

/* With optional parameters */
{
  "method": "browser.createUserContext",
  "params": {
    "acceptInsecureCerts": true,
    "proxy": {
      "proxyType": "manual",
      "httpProxy": "127.0.0.1:80"
    },
    "unhandledPromptBehavior": {
      "default": "accept"
    }
  }
}
```

### Parameter

Setzen Sie `params` auf ein leeres Objekt (`{}`) oder fügen Sie eines der folgenden optionalen Felder hinzu:

- [`acceptInsecureCerts`](/de/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts) {{optional_inline}}
  - : Ein Boolean, der steuert, ob unzuverlässige TLS-Zertifikate (z.B. selbstsignierte oder abgelaufene) innerhalb dieses Benutzerkontexts akzeptiert werden. Wenn gesetzt, überschreibt es die [Sitzungsebene](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new#acceptinsecurecerts) `acceptInsecureCerts` Einstellung für diesen Benutzerkontext.
- `proxy` {{optional_inline}}
  - : Ein Objekt, das die Proxy-Konfiguration spezifiziert, die der Browser für Netzwerk-Anfragen innerhalb dieses Benutzerkontexts verwenden soll. Wenn gesetzt, überschreibt es die [Sitzungsebene](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new#proxy) `proxy` Einstellung für diesen Benutzerkontext.
- `unhandledPromptBehavior` {{optional_inline}}
  - : Ein Objekt, das das Standardverhalten angibt, wenn ein Benutzerhinweis (wie ein `alert`, `confirm` oder `prompt` Dialog) innerhalb dieses Benutzerkontexts auftritt. Wenn gesetzt, überschreibt es die [Sitzungsebene](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new#unhandledpromptbehavior) `unhandledPromptBehavior` Einstellung für diesen Benutzerkontext.

> [!NOTE]
> Wenn ein Parameter gesetzt ist, gilt er für alle bestehenden und zukünftigen Tabs innerhalb dieses Benutzerkontexts.

### Rückgabewert

Folgendes Feld im `result` Objekt der Antwort beschreibt den erstellten Benutzerkontext:

- `userContext`
  - : Ein String, der die ID enthält, die den erstellten Benutzerkontext eindeutig identifiziert.

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
- `unsupported operation`
  - : `acceptInsecureCerts` ist `true`, aber der Browser unterstützt keine unsicheren TLS-Verbindungen, oder `proxy` ist angegeben, aber der Browser kann die Proxy-Einstellungen für diesen Benutzerkontext nicht konfigurieren oder die angegebene Proxy-Konfiguration nicht anwenden.

## Beispiele

### Erstellen eines Benutzerkontexts mit Standardeinstellungen

Mit einer [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), senden Sie die folgende Nachricht, um einen Benutzerkontext zu erstellen:

```json
{
  "id": 1,
  "method": "browser.createUserContext",
  "params": {}
}
```

Der Browser antwortet mit einer erfolgreichen Erstellung des Benutzerkontexts wie folgt:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "userContext": "4e4b1f6d-3f1a-4b2e-9f8c-1a2b3c4d5e6f"
  }
}
```

### Erstellen eines Benutzerkontexts mit einem Proxy

Senden Sie die folgende Nachricht, um einen Benutzerkontext zu erstellen, der Netzwerk-Anfragen über einen Proxy leitet:

```json
{
  "id": 2,
  "method": "browser.createUserContext",
  "params": {
    "proxy": {
      "proxyType": "manual",
      "httpProxy": "127.0.0.1:80"
    }
  }
}
```

Der Browser antwortet mit einer erfolgreichen Erstellung des Benutzerkontexts wie folgt:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "userContext": "7d9e2a1b-5c3f-4e6d-8a7b-2c1d0e9f8a7b"
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) Befehl
- [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) Befehl
- [`browser.removeUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/removeUserContext) Befehl

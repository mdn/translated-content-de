---
title: "Navigator: registerProtocolHandler()-Methode"
short-title: registerProtocolHandler()
slug: Web/API/Navigator/registerProtocolHandler
l10n:
  sourceCommit: f98675af9d0a80f33d7875c48cfdb41f71ed1de9
---

{{APIRef("HTML DOM")}}{{securecontext_header}}

Die **[`Navigator`](/de/docs/Web/API/Navigator)**-Methode **`registerProtocolHandler()`** ermöglicht es Webseiten, ihre Fähigkeit zur Öffnung oder Handhabung bestimmter URL-Schemata (auch als Protokolle bekannt) zu registrieren.

Diese API erlaubt es beispielsweise, dass Webmail-Seiten `mailto:`-URLs öffnen oder VoIP-Seiten `tel:`-URLs öffnen.

Um einen Protokoll-Handler zu registrieren, ruft eine Website `registerProtocolHandler()` auf und übergibt dabei das zu registrierende Protokoll und eine Vorlage-URL.

Wenn der Benutzer einen Link aktiviert, der das registrierte Protokoll verwendet, wird der Browser das [`href`](/de/docs/Web/HTML/Element/a#href) vom aktivierten Link in die während der Registrierung bereitgestellte URL-Vorlage einfügen und zu der resultierenden URL navigieren.

Der Browser kann den Benutzer bitten, zu bestätigen, dass die Seite das Protokoll handhaben darf, entweder bei der Registrierung des Protokolls oder wenn der Benutzer den Link aktiviert.

## Syntax

```js-nolint
registerProtocolHandler(scheme, url)
```

### Parameter

- `scheme`

  - : Ein String, der das Schema für das Protokoll enthält, welches die Seite handhaben möchte.

    Dies kann ein benutzerdefiniertes Schema sein, in welchem Fall der Name des Schemas:

    - Mit `web+` beginnt
    - Mindestens einen Buchstaben nach dem `web+`-Präfix enthält
    - Nur Kleinbuchstaben [ASCII](/de/docs/Glossary/ASCII) enthält.

    Andernfalls muss das Schema eines der folgenden sein:

    - `bitcoin`
    - `ftp`
    - `ftps`
    - `geo`
    - `im`
    - `irc`
    - `ircs`
    - `magnet`
    - `mailto`
    - `matrix`
    - `mms`
    - `news`
    - `nntp`
    - `openpgp4fpr`
    - `sftp`
    - `sip`
    - `sms`
    - `smsto`
    - `ssh`
    - `tel`
    - `urn`
    - `webcal`
    - `wtai`
    - `xmpp`

    <!-- This must match: https://html.spec.whatwg.org/multipage/system-state.html#safelisted-scheme -->

- `url`

  - : Ein String, der die URL des Handlers enthält.
    Diese URL muss `%s` als Platzhalter enthalten, der durch die [escapete](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) URL ersetzt wird, die gehandhabt werden soll.

    Die Handler-URL muss das `https`-Schema verwenden und muss vom selben [Origin](/de/docs/Glossary/origin) sein wie die Webseite, die versucht, den Handler zu registrieren.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Der User Agent blockierte die Registrierung.
    Dies kann passieren, wenn:

    - Das registrierte Schema (Protokoll) ungültig ist, wie ein Schema, das der Browser selbst behandelt (`https:`, `about:`, etc.)
    - Der [Origin](/de/docs/Glossary/origin) der Handler-URL nicht mit dem Origin der Seite übereinstimmt, die diese API aufruft.
    - Das Schema der Handler-URL nicht `https` ist.

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der `%s`-Platzhalter fehlt in der Handler-URL.

## Beispiele

### Registrierung eines Handlers für das Mailto-Protokoll

Es ist ziemlich üblich, dass Webseiten Ressourcen mit nicht-`https`-Protokollen verknüpfen. Ein Beispiel ist das `mailto:`-Protokoll. Webautoren können einen `mailto`-Link verwenden, wenn sie eine bequeme Möglichkeit bieten möchten, dass Benutzer direkt von der Webseite aus eine E-Mail senden können:

```html
<a href="mailto:webmaster@example.com">Web Master</a>
```

Wenn der Link aktiviert wird, sollte der Browser die Standardanwendung auf dem Desktop für die E-Mail-Bearbeitung starten. Man kann dies als _Desktop-basierter_ Protokoll-Handler betrachten.

Webbasierte Protokoll-Handler ermöglichen es webbasierten Anwendungen ebenfalls, am Prozess teilzunehmen. Eine E-Mail-Webanwendung unter `mail.example.org` kann sich registrieren, um `mailto`-Links mit einem Code wie diesem zu handhaben:

```js
navigator.registerProtocolHandler("mailto", "https://mail.example.org/?to=%s");
```

Nachdem, wenn der Benutzer auf einen `mailto`-Link auf irgendeiner Webseite klickt, wird der Browser (möglicherweise nach Bestätigung) zu `https://mail.example.org/?to=mailto:webmaster@example.com` navigieren. Diese Seite könnte den URL-Parameter parsen, um die Adresse zu extrahieren, und diese verwenden, um eine E-Mail zu initialisieren.

### Registrierung eines Handlers für ein benutzerdefiniertes Protokoll

In diesem Beispiel registriert eine Seite einen Handler für das `web+burger`-Protokoll mit einem Code wie diesem:

```js
navigator.registerProtocolHandler(
  "web+burger",
  "https://burgers.example.org/?burger=%s",
);
```

Anschließend besucht der Benutzer eine Seite mit einem Link wie diesem:

```html
<a href="web+burger:cheeseburger">cheeseburger</a>
```

Wenn der Benutzer den `web+burger`-Link aktiviert, wird der Browser (möglicherweise nach Bestätigung) zu `https://burgers.example.org/?burger=web+burger:cheeseburger` navigieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

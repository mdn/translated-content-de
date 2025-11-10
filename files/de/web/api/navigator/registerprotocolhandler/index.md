---
title: "Navigator: registerProtocolHandler() Methode"
short-title: registerProtocolHandler()
slug: Web/API/Navigator/registerProtocolHandler
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}{{securecontext_header}}

Die **[`Navigator`](/de/docs/Web/API/Navigator)** Methode **`registerProtocolHandler()`** ermöglicht es Websites, ihre Fähigkeit zu registrieren, bestimmte URL-Schemata (auch als Protokolle bekannt) zu öffnen oder zu bearbeiten.

Zum Beispiel können Webmail-Seiten mit dieser API `mailto:` URLs öffnen oder VoIP-Seiten `tel:` URLs.

Um einen Protokoll-Handler zu registrieren, ruft eine Website `registerProtocolHandler()` auf und übergibt das zu registrierende Protokoll und eine URL-Vorlage.

Wenn der Benutzer einen Link aktiviert, der das registrierte Protokoll verwendet, fügt der Browser das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) des aktivierten Links in die während der Registrierung des Handlers bereitgestellte URL-Vorlage ein und navigiert die aktuelle Seite zur resultierenden URL.

Der Browser kann den Benutzer entweder bei der Registrierung des Protokolls oder bei der Aktivierung des Links fragen, ob die Seite das Protokoll bearbeiten darf.

## Syntax

```js-nolint
registerProtocolHandler(scheme, url)
```

### Parameter

- `scheme`

  - : Ein String, der das Schema für das Protokoll enthält, das die Seite bearbeiten möchte.

    Dies kann ein benutzerdefiniertes Schema sein, in diesem Fall:

    - Beginnt es mit `web+`
    - Enthält mindestens einen Buchstaben nach dem `web+` Präfix
    - Enthält nur Kleinbuchstaben des {{Glossary("ASCII", "ASCII")}} Zeichensatzes.

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

    <!-- Dies muss übereinstimmen: https://html.spec.whatwg.org/multipage/system-state.html#safelisted-scheme -->

- `url`

  - : Ein String, der die URL des Handlers enthält.
    Diese URL muss `%s` enthalten, als Platzhalter, der durch die [escapte](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) URL ersetzt wird, die behandelt werden soll.

    Die Handler-URL muss das `https` Schema verwenden und muss von demselben {{Glossary("origin", "Ursprung")}} sein wie die Webseite, die versucht, den Handler zu registrieren.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Der Benutzeragent hat die Registrierung blockiert.
    Dies könnte passieren, wenn:
    - Das registrierte Schema (Protokoll) ungültig ist, zum Beispiel ein Schema, das der Browser selbst verarbeitet (`https:`, `about:`, etc.)
    - Der {{Glossary("origin", "Ursprung")}} der Handler-URL nicht mit dem Ursprung der Seite übereinstimmt, die diese API aufruft.
    - Das Schema der Handler-URL nicht `https` ist.

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der `%s` Platzhalter fehlt in der Handler-URL.

## Beispiele

### Registrierung eines Handlers für das mailto-Protokoll

Es ist ziemlich üblich, dass Webseiten auf Ressourcen mit nicht-`https` Protokollen verlinken. Ein Beispiel ist das `mailto:` Protokoll. Web-Autoren können einen `mailto` Link verwenden, wenn sie eine bequeme Möglichkeit bieten möchten, damit Benutzer direkt von der Webseite aus eine E-Mail senden können:

```html
<a href="mailto:webmaster@example.com">Web Master</a>
```

Wenn der Link aktiviert wird, sollte der Browser die Standard-Desktop-Anwendung zum Verarbeiten von E-Mails starten. Sie können dies als einen _desktop-basierten_ Protokoll-Handler betrachten.

Web-basierte Protokoll-Handler ermöglichen es auch web-basierten Anwendungen, an diesem Prozess teilzunehmen. Eine E-Mail-Webanwendung unter `mail.example.org` kann sich registrieren, um `mailto` Links zu bearbeiten, mit Code wie diesem:

```js
navigator.registerProtocolHandler("mailto", "https://mail.example.org/?to=%s");
```

Danach, wenn der Benutzer auf einen `mailto` Link auf irgendeiner Website klickt, wird der Browser (möglicherweise nach einer Bestätigung des Browsers) zu `https://mail.example.org/?to=mailto:webmaster@example.com` navigieren. Diese Seite könnte den URL-Parameter analysieren, um die Adresse zu extrahieren und diese verwenden, um eine E-Mail zu initialisieren.

### Registrierung eines Handlers für ein benutzerdefiniertes Protokoll

In diesem Beispiel registriert eine Seite einen Handler für das `web+burger` Protokoll mit folgendem Code:

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

Wenn der Benutzer den `web+burger` Link aktiviert, wird der Browser (möglicherweise nach einer Bestätigung des Benutzers) zu `https://burgers.example.org/?burger=web+burger:cheeseburger` navigieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

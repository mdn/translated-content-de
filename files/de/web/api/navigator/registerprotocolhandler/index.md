---
title: "Navigator: registerProtocolHandler() Methode"
short-title: registerProtocolHandler()
slug: Web/API/Navigator/registerProtocolHandler
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}{{securecontext_header}}

Die **[`Navigator`](/de/docs/Web/API/Navigator)** Methode **`registerProtocolHandler()`** ermöglicht es Websites, ihre Fähigkeit zu registrieren, bestimmte URL-Schemata (auch als Protokolle bekannt) zu öffnen oder zu bearbeiten.

Beispielsweise erlaubt diese API Webmail-Sites, `mailto:` URLs zu öffnen, oder VoIP-Sites, `tel:` URLs zu öffnen.

Um einen Protokoll-Handler zu registrieren, ruft eine Website `registerProtocolHandler()` auf und übergibt das zu registrierende Protokoll und eine URL-Vorlage.

Wenn der Nutzer einen Link aktiviert, der das registrierte Protokoll verwendet, wird der Browser die [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) vom aktivierten Link in die während der Registrierung des Handlers angegebene URL-Vorlage einfügen und die aktuelle Seite zur resultierenden URL navigieren.

Der Browser kann den Benutzer bitten zu bestätigen, dass die Seite das Protokoll bearbeiten darf, entweder wenn das Protokoll registriert wird oder wenn der Benutzer den Link aktiviert.

## Syntax

```js-nolint
registerProtocolHandler(scheme, url)
```

### Parameter

- `scheme`

  - : Ein String, der das Schema für das Protokoll enthält, welches die Seite bearbeiten möchte.

    Dies kann ein benutzerdefiniertes Schema sein, in welchem Fall der Name des Schemas:

    - Mit `web+` beginnt
    - Nach dem `web+` Präfix mindestens einen Buchstaben enthält
    - Nur aus Kleinbuchstaben im {{Glossary("ASCII", "ASCII")}} besteht.

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

    <!-- Dies muss dem entsprechen: https://html.spec.whatwg.org/multipage/system-state.html#safelisted-scheme -->

- `url`

  - : Ein String, der die URL des Handlers enthält.
    Diese URL muss `%s` als Platzhalter enthalten, der durch die zu bearbeitende, [escapte](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) URL ersetzt wird.

    Die Handler-URL muss das `https`-Schema verwenden und muss vom gleichen {{Glossary("origin", "Ursprung")}} wie die Webseite sein, die versucht, den Handler zu registrieren.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Der Benutzeragent hat die Registrierung blockiert.
    Dies kann passieren, wenn:

    - Das registrierte Schema (Protokoll) ungültig ist, z.B. ein Schema, das der Browser selbst bearbeitet (`https:`, `about:`, etc.)
    - Der {{Glossary("origin", "Ursprung")}} der Handler-URL nicht mit dem Ursprung der Seite übereinstimmt, die diese API aufruft.
    - Das Schema der Handler-URL nicht `https` ist.

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der `%s` Platzhalter fehlt in der Handler-URL.

## Beispiele

### Registrieren eines Handlers für das mailto-Protokoll

Es ist ziemlich üblich, dass Webseiten zu Ressourcen mit nicht-`https` Protokollen verlinken. Ein Beispiel ist das `mailto:`-Protokoll. Webautoren können einen `mailto`-Link verwenden, wenn sie eine bequeme Möglichkeit für Nutzer bereitstellen möchten, direkt von der Webseite aus eine E-Mail zu senden:

```html
<a href="mailto:webmaster@example.com">Web Master</a>
```

Wenn der Link aktiviert wird, sollte der Browser die Standardeinstellungsanwendung für die Bearbeitung von E-Mails starten. Sie können dies als einen _desktop-basierten_ Protokoll-Handler betrachten.

Webbasierte Protokoll-Handler ermöglichen es auch webbasierten Anwendungen, an diesem Prozess teilzunehmen. Eine E-Mail-Webanwendung bei `mail.example.org` kann so registriert werden, dass sie `mailto`-Links bearbeitet, mit Code wie diesem:

```js
navigator.registerProtocolHandler("mailto", "https://mail.example.org/?to=%s");
```

Danach, wenn der Nutzer auf einen `mailto`-Link auf irgendeiner Webseite klickt, wird der Browser (nach einer möglichen Bestätigung durch den Browser) zu `https://mail.example.org/?to=mailto:webmaster@example.com` navigieren. Diese Seite könnte den URL-Parameter analysieren, um die Adresse zu extrahieren und damit die E-Mail zu initialisieren.

### Registrieren eines Handlers für ein benutzerdefiniertes Protokoll

In diesem Beispiel registriert eine Seite einen Handler für das `web+burger`-Protokoll mit Code wie diesem:

```js
navigator.registerProtocolHandler(
  "web+burger",
  "https://burgers.example.org/?burger=%s",
);
```

Danach besucht der Nutzer eine Seite mit einem Link wie diesem:

```html
<a href="web+burger:cheeseburger">cheeseburger</a>
```

Wenn der Nutzer den `web+burger`-Link aktiviert, wird der Browser (nach einer möglichen Bestätigung durch den Nutzer) zu `https://burgers.example.org/?burger=web+burger:cheeseburger` navigieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

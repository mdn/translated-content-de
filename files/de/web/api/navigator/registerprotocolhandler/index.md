---
title: "Navigator: registerProtocolHandler() Methode"
short-title: registerProtocolHandler()
slug: Web/API/Navigator/registerProtocolHandler
l10n:
  sourceCommit: f98675af9d0a80f33d7875c48cfdb41f71ed1de9
---

{{APIRef("HTML DOM")}}{{securecontext_header}}

Die **[`Navigator`](/de/docs/Web/API/Navigator)** Methode **`registerProtocolHandler()`** ermöglicht es Webseiten, ihre Fähigkeit zu registrieren, bestimmte URL-Schemata (auch bekannt als Protokolle) zu öffnen oder zu bearbeiten.

Diese API ermöglicht es beispielsweise Webmail-Seiten, `mailto:` URLs zu öffnen, oder VoIP-Seiten, `tel:` URLs zu öffnen.

Um einen Protokoll-Handler zu registrieren, ruft eine Webseite `registerProtocolHandler()` auf und übergibt das zu registrierende Protokoll und eine URL-Vorlage.

Wenn der Benutzer auf einen Link klickt, der das registrierte Protokoll verwendet, fügt der Browser den [`href`](/de/docs/Web/HTML/Element/a#href) des aktivierten Links in die URL-Vorlage ein, die bei der Handler-Registrierung bereitgestellt wurde, und navigiert die aktuelle Seite zur resultierenden URL.

Der Browser kann den Benutzer bitten zu bestätigen, dass die Seite berechtigt werden soll, das Protokoll zu bearbeiten, entweder wenn das Protokoll registriert wird oder wenn der Benutzer den Link aktiviert.

## Syntax

```js-nolint
registerProtocolHandler(scheme, url)
```

### Parameter

- `scheme`

  - : Ein String, der das Schema für das Protokoll enthält, das die Seite handhaben möchte.

    Dies kann ein benutzerdefiniertes Schema sein, in diesem Fall gilt für den Namen des Schemas:

    - Beginnt mit `web+`
    - Enthält mindestens einen Buchstaben nach dem `web+` Präfix
    - Enthält nur Kleinbuchstaben des {{Glossary("ASCII", "ASCII")}}.

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
    Diese URL muss `%s` als Platzhalter enthalten, der durch die [escapte](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) URL ersetzt wird, die bearbeitet werden soll.

    Die Handler-URL muss das `https` Schema verwenden und muss aus dem gleichen {{Glossary("origin", "Ursprung")}} stammen wie die Webseite, die versucht, den Handler zu registrieren.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die Registrierung wurde vom User Agent blockiert.
    Dies kann passieren, wenn:

    - Das registrierte Schema (Protokoll) ungültig ist, wie ein Schema, das der Browser selbst handhabt (`https:`, `about:`, etc.)
    - Der {{Glossary("origin", "Ursprung")}} der Handler-URL nicht mit dem Ursprung der Seite übereinstimmt, die diese API aufruft.
    - Das Schema der Handler-URL nicht `https` ist.

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der `%s` Platzhalter fehlt in der Handler-URL.

## Beispiele

### Registrierung eines Handlers für das mailto-Protokoll

Es ist relativ häufig, dass Webseiten Links zu Ressourcen unter Verwendung von nicht-`https` Protokollen setzen. Ein Beispiel ist das `mailto:` Protokoll. Webseitenautoren können einen `mailto` Link verwenden, um Benutzern eine praktische Möglichkeit zu bieten, direkt von der Webseite aus eine E-Mail zu senden:

```html
<a href="mailto:webmaster@example.com">Web Master</a>
```

Wird der Link aktiviert, sollte der Browser die Standard-Desktopanwendung für das Bearbeiten von E-Mails starten. Sie können dies als einen _desktopbasierten_ Protokoll-Handler ansehen.

Webbasierte Protokoll-Handler erlauben es webbasierten Anwendungen ebenfalls, sich am Prozess zu beteiligen. Eine E-Mail-Web-App bei `mail.example.org` kann mit folgendem Code registriert werden, um `mailto` Links zu bearbeiten:

```js
navigator.registerProtocolHandler("mailto", "https://mail.example.org/?to=%s");
```

Anschließend wird der Browser (nachdem möglicherweise der Browser um Bestätigung gebeten wurde) zu `https://mail.example.org/?to=mailto:webmaster@example.com` navigieren, wenn der Benutzer auf einen `mailto` Link auf einer beliebigen Webseite klickt. Diese Seite könnte den URL-Parameter parsen, um die Adresse zu extrahieren und diese verwenden, um eine E-Mail zu initialisieren.

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

Wenn der Benutzer auf den `web+burger` Link klickt, wird der Browser (nachdem möglicherweise der Benutzer um Bestätigung gebeten wurde) zu `https://burgers.example.org/?burger=web+burger:cheeseburger` navigieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

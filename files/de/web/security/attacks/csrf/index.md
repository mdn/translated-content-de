---
title: Cross-Site Request Forgery (CSRF)
slug: Web/Security/Attacks/CSRF
l10n:
  sourceCommit: b07e3b87504a8984cf31d7a735ec373d33a11cd5
---

Bei einem Cross-Site Request Forgery (CSRF)-Angriff täuscht ein Angreifer den Benutzer oder den Browser dazu, eine HTTP-Anfrage an die Zielseite von einer bösartigen Seite aus zu stellen. Die Anfrage enthält die Zugangsdaten des Benutzers und veranlasst den Server, eine schädliche Aktion durchzuführen, im Glauben, dass der Benutzer dies beabsichtigt hat.

## Überblick

Eine Website führt typischerweise spezielle Aktionen im Namen eines Benutzers aus – zum Beispiel den Kauf eines Produkts oder das Vereinbaren eines Termins – indem sie eine HTTP-Anfrage vom Browser des Benutzers erhält, oft mit Parametern, die die durchzuführende Aktion detaillieren. Um sicherzustellen, dass die Anfrage tatsächlich vom betreffenden Benutzer stammt, erwartet der Server, dass die Anfrage {{Glossary("Credential", "Zugangsdaten")}} des Benutzers enthält: beispielsweise ein Cookie, das die Sitzungs-ID des Benutzers enthält.

Im untenstehenden Beispiel hat sich der Benutzer zuvor bei seiner Bank angemeldet, und der Browser hat ein Sitzungs-Cookie für den Benutzer gespeichert. Die Seite enthält ein {{htmlelement("form")}}-Element, das es dem Benutzer ermöglicht, Geld an eine andere Person zu überweisen. Wenn der Benutzer das Formular absendet, sendet der Browser eine {{httpmethod("POST")}}-Anfrage an den Server, die die Formulardaten enthält. Wenn der Benutzer angemeldet ist, enthält die Anfrage das Cookie des Benutzers. Der Server validiert das Cookie und führt die spezielle Aktion durch – in diesem Fall die Überweisung von Geld:

![Diagramm zeigt, wie ein Benutzer ein Browser-Formular absendet, der Browser dann eine POST-Anfrage an den Server sendet und der Server die Anfrage validiert.](form-post.svg)

In diesem Leitfaden nennen wir eine solche Anfrage, die eine spezielle Aktion ausführt, eine _zustandsändernde Anfrage_.

Bei einem CSRF-Angriff erstellt der Angreifer eine Website, die ein Formular enthält. Das [`action`-Attribut](/de/docs/Web/HTML/Reference/Elements/form#action) des Formulars ist auf die Website der Bank gesetzt, und das Formular enthält versteckte Eingabefelder, die die Felder der Bank nachahmen:

```html
<form action="https://my-bank.example.org/transfer" method="POST">
  <input type="hidden" name="recipient" value="attacker" />
  <input type="hidden" name="amount" value="1000" />
</form>
```

Die Seite enthält außerdem JavaScript, das das Formular beim Laden der Seite absendet:

```js
const form = document.querySelector("form");
form.submit();
```

Wenn der Benutzer die Seite besucht, sendet der Browser das Formular an die Website der Bank. Da der Benutzer bei seiner Bank angemeldet ist, enthält die Anfrage möglicherweise das echte Cookie des Benutzers, sodass der Bankserver die Anfrage erfolgreich validiert und die Gelder überweist:

![Diagramm zeigt einen CSRF-Angriff, bei dem eine scheinbare Seite eine POST-Anfrage an die Website der Bank des Benutzers sendet.](csrf-form-post.svg)

Es gibt andere Möglichkeiten, wie der Angreifer eine Cross-Site Request Forgery initiieren könnte. Zum Beispiel, wenn die Website eine {{httpmethod("GET")}}-Anfrage verwendet, um die Aktion auszuführen, dann kann der Angreifer vermeiden, ein Formular zu verwenden, und den Angriff ausführen, indem er dem Benutzer einen Link zu einer Seite sendet, die ein Markup wie dieses enthält:

```html
<img
  src="https://my-bank.example.org/transfer?recipient=attacker&amount=1000" />
```

Wenn der Benutzer die Seite lädt, versucht der Browser, die Bildressource abzurufen, die wirklich die Transaktionsanfrage ist.

Im Allgemeinen ist ein CSRF-Angriff möglich, wenn Ihre Website:

- HTTP-Anfragen verwendet, um einen Zustand auf dem Server zu ändern.
- Nur Cookies verwendet, um zu validieren, dass die Anfrage von einem authentifizierten Benutzer stammt.
- Nur Parameter in der Anfrage verwendet, die ein Angreifer vorhersagen kann.

## Abwehrmaßnahmen gegen CSRF

In diesem Abschnitt skizzieren wir drei alternative Abwehrstrategien gegen CSRF und eine vierte Praxis, die zur Erhöhung der Sicherheit in Kombination mit einer der anderen Methoden verwendet werden kann.

- Die erste primäre Abwehrmaßnahme ist die [Verwendung von CSRF-Tokens](#csrf-tokens), die in die Seite eingebettet sind. Dies ist die gängigste Methode, wenn Sie zustandsändernde Anfragen von Formularelementen senden, wie in unserem obigen Beispiel.

- Die zweite ist die [Verwendung von Fetch-Metadaten](#fetch-metadaten) in HTTP-Headern, um festzustellen, ob die zustandsändernde Anfrage cross-site gestellt wird.

- Die dritte ist sicherzustellen, dass zustandsändernde Anfragen [keine einfachen Anfragen](#vermeidung_einfacher_anfragen) sind, sodass Cross-Origin-Anfragen standardmäßig blockiert werden. Diese Methode eignet sich, wenn Sie zustandsändernde Anfragen von JavaScript APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch) absetzen.

Schließlich werden wir das [`SameSite`-Cookie-Attribut](#defense_in_depth_samesite_cookies) diskutieren, das neben einer der vorherigen Methoden verwendet werden kann, um die Sicherheitsstufe zu erhöhen.

### CSRF-Tokens

Bei dieser Abwehrmaßnahme bettet der Server, wenn er eine Seite bereitstellt, einen unvorhersehbaren Wert in die Seite ein, den CSRF-Token. Wenn die legitime Seite die zustandsändernde Anfrage an den Server sendet, enthält sie den CSRF-Token in der HTTP-Anfrage. Der Server kann dann den Token-Wert überprüfen und führt die Anfrage nur aus, wenn sie übereinstimmt. Da ein Angreifer den Token-Wert nicht erraten kann, kann er keine erfolgreiche Fälschung ausstellen. Selbst wenn der Angreifer nach der Verwendung einen Token entdeckt, kann die Anfrage nicht wiederholt werden, wenn sich der Token jedes Mal ändert.

Für Formularübertragungen wird der CSRF-Token normalerweise in einem versteckten Formularfeld enthalten, sodass er bei der Formularübertragung automatisch an den Server zur Überprüfung gesendet wird.

Für eine JavaScript-API wie `fetch()` könnte der Token in einem Cookie platziert oder in die Seite eingebettet werden, und das JavaScript extrahiert den Wert und sendet ihn als zusätzlichen Header.

Moderne Web-Frameworks haben normalerweise integrierte Unterstützung für CSRF-Tokens: Zum Beispiel ermöglicht [Django](https://www.djangoproject.com/) es Ihnen, Formulare mit dem [`csrf_token`](https://docs.djangoproject.com/en/5.1/ref/csrf/)-Tag zu schützen. Dies generiert ein zusätzliches verstecktes Formularfeld, das den Token enthält, den das Framework dann auf dem Server überprüft.

Um von diesem Schutz zu profitieren, müssen Sie alle Orte auf Ihrer Website verstehen, an denen Sie zustandsändernde HTTP-Anfragen verwenden, und sicherstellen, dass Sie den Schutz durch Ihr gewähltes Framework nutzen.

### Fetch-Metadaten

Fetch-Metadaten sind eine Sammlung von HTTP-Anforderungs-Headern, die vom Browser hinzugefügt werden, um zusätzliche Informationen über den Kontext einer HTTP-Anfrage bereitzustellen. Der Server kann diese Header verwenden, um zu entscheiden, ob eine Anfrage zugelassen oder blockiert wird.

Am relevantesten für CSRF ist der {{httpheader("Sec-Fetch-Site")}}-Header, der dem Server mitteilt, ob diese Anfrage von derselben Herkunft, derselben Seite, von einer anderen Seite oder direkt vom Benutzer initiiert wurde. Der Server kann diese Information verwenden, um Cross-Origin-Anfragen zuzulassen oder sie als potenzielle CSRF-Angriffe zu blockieren.

Zum Beispiel erlaubt dieser [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)-Code nur Anfragen von derselben Seite und derselben Herkunft:

```js
app.post("/transfer", (req, res) => {
  const secFetchSite = req.headers["sec-fetch-site"];
  if (secFetchSite === "same-origin" || secFetchSite === "same-site") {
    console.log("allowed");
    // Update state
  } else {
    console.log("denied");
    // Don't update state
  }
});
```

Siehe {{Glossary("Fetch_metadata_request_header", "Fetch Metadata Request Header")}} für die vollständige Liste der Fetch-Metadaten-Header und [Protect your resources from web attacks with Fetch Metadata](https://web.dev/articles/fetch-metadata) für einen Leitfaden zur Verwendung dieser Funktion.

### Vermeidung einfacher Anfragen

Webbrowser unterscheiden zwischen zwei Arten von HTTP-Anfragen: [_einfache_ Anfragen](/de/docs/Web/HTTP/Guides/CORS#simple_requests) und andere Anfragen.

Einfache Anfragen, die aus einer `<form>`-Elementübertragung resultieren, können ohne Blockierung über Cross-Origin gesendet werden. Da Formulare seit den frühen Tagen des Webs in der Lage waren, Cross-Origin-Anfragen zu stellen, ist es wichtig für die Kompatibilität, dass sie weiterhin Cross-Origin-Anfragen stellen können. Aus diesem Grund müssen wir andere Strategien implementieren, um Formulare gegen CSRF zu schützen, wie die Verwendung eines CSRF-Tokens.

Andere Teile der Web-Plattform, insbesondere JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch), können jedoch unterschiedliche Arten von Anfragen stellen (z.B. Anfragen, die benutzerdefinierte Header setzen), und diese Anfragen sind standardmäßig nicht Cross-Origin erlaubt, sodass ein CSRF-Angriff nicht gelingen würde.

Eine Website, die `fetch()` oder `XMLHttpRequest` verwendet, kann sich gegen CSRF schützen, indem sie sicherstellt, dass die zustandsändernden Anfragen, die sie stellt, niemals einfache Anfragen sind.

Zum Beispiel verhindert das Setzen des {{httpheader("Content-Type")}} der Anfrage auf `"application/json"`, dass sie als einfache Anfrage behandelt wird:

```js
fetch("https://my-bank.example.org/transfer", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ recipient: "joe", amount: "100" }),
});
```

Ähnlich verhindert das Setzen eines benutzerdefinierten Headers auf die Anfrage, dass sie als einfache Anfrage behandelt wird:

```js
fetch("https://my-bank.example.org/transfer", {
  method: "POST",
  headers: {
    "X-MY-BANK-ANTI-CSRF": 1,
  },
  body: JSON.stringify({ recipient: "joe", amount: "100" }),
});
```

Der Header-Name kann beliebig sein, solange er nicht mit Standard-Headern in Konflikt steht.

Der Server kann dann das Vorhandensein des Headers überprüfen: Wenn er existiert, weiß der Server, dass die Anfrage nicht als einfache Anfrage behandelt wurde.

#### Nicht-einfache Anfragen und CORS

Wir haben gesagt, dass nicht-einfache Anfragen _standardmäßig_ nicht Cross-Origin gesendet werden. Der Haken dabei ist, dass das [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)-Protokoll einer Website erlaubt, diese Einschränkung zu lockern.

Insbesondere ist Ihre Website anfällig für einen CSRF-Angriff von einem bestimmten Ursprung, wenn ihre Antwort auf eine zustandsändernde Anfrage Folgendes enthält:

- Den {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader, und dieser Header listet die Herkunft des Absenders auf.
- Den {{httpheader("Access-Control-Allow-Credentials")}}-Antwortheader.

### Sicherheit in der Tiefe: SameSite-Cookies

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Cookie-Attribut bietet einen gewissen Schutz gegen CSRF-Angriffe. Es ist kein vollständiger Schutz und sollte am besten als Ergänzung zu einer der anderen Abwehrmaßnahmen betrachtet werden, um einen gewissen Grad an Sicherheit in der Tiefe zu bieten.

Dieses Attribut steuert, wann ein Browser das Cookie in einer Cross-Site-Anfrage einfügen darf. Es hat drei mögliche Werte: `None`, `Lax` und `Strict`.

Der `Strict`-Wert bietet den meisten Schutz: Wenn dieses Attribut gesetzt ist, wird der Browser das Cookie in keiner Cross-Site-Anfrage einfügen. Dies führt jedoch zu einem Benutzerfreundlichkeitsproblem: Wenn der Benutzer bei Ihrer Website angemeldet ist und einem Link von einer anderen Website zu Ihrer folgt, werden Ihre Cookies nicht eingeschlossen und der Benutzer wird nicht erkannt, wenn er Ihre Website erreicht.

Der `Lax`-Wert lockert diese Einschränkung: Cookies werden in Cross-Site-Anfragen eingeschlossen, wenn beide folgenden Bedingungen zutreffen:

- Die Anfrage war eine Navigation des Top-Level-Browsing-Kontexts.
- Die Anfrage verwendete eine {{Glossary("Safe/HTTP", "sichere")}} Methode: insbesondere ist {{httpmethod("GET")}} sicher, aber {{httpmethod("POST")}} ist es nicht.

`Lax` bietet jedoch erheblich schwächeren Schutz als `Strict`:

- Ein Angreifer kann eine Top-Level-Navigation auslösen. Zum Beispiel zeigen wir am Anfang dieses Artikels einen CSRF-Angriff, bei dem der Angreifer ein Formular an das Ziel sendet: dies wird als eine Top-Level-Navigation betrachtet. Wenn das Formular mit `GET` übermittelt würde, würde die Anfrage immer noch Cookies mit `SameSite=Lax` enthalten.
- Selbst wenn der Server überprüft, dass die Anfrage nicht mit `GET` gesendet wurde, unterstützen einige Web-Frameworks „Method Override“: Dies ermöglicht einem Angreifer, eine Anfrage mit `GET` zu senden, aber sie erscheint dem Server, als ob sie `POST` verwendet hätte.

Als allgemeine Anleitung sollten Sie `Strict` für einige Cookies und `Lax` für andere verwenden:

- `Lax` für Cookies, die Sie verwenden, um zu entscheiden, ob einem eingeloggten Benutzer eine Seite angezeigt werden soll.
- `Strict` für Cookies, die Sie für zustandsändernde Anfragen verwenden, die Sie nicht Cross-Site zulassen möchten.

Ein weiteres Problem mit dem `SameSite`-Attribut ist, dass es Sie vor Anfragen von einer anderen {{Glossary("Site", "Seite")}} und nicht von einem anderen {{Glossary("Origin", "Ursprung")}} schützt. Dies ist ein lockerer Schutz, da (zum Beispiel) `https://foo.example.org` und `https://bar.example.org` als dieselbe Seite betrachtet werden, obwohl sie verschiedene Ursprünge sind. Effektiv müssen Sie, wenn Sie auf den gleiche-Seite-Schutz vertrauen, allen Subdomains Ihrer Seite vertrauen.

Siehe [Bypassing SameSite cookie restrictions](https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions) für weitere Details zu den Einschränkungen von `SameSite`.

## Zusammenfassende Verteidigungsliste

- Verstehen Sie, wo auf Ihrer Website Sie zustandsändernde Anfragen implementieren, die Sitzungs-Cookies verwenden, um zu überprüfen, welcher Benutzer die Anfrage gestellt hat.
- Implementieren Sie mindestens eine der primären Abwehrmaßnahmen, die in diesem Dokument beschrieben werden:
  - Wenn Sie `<form>`-Elemente verwenden, um diese Anfragen zu stellen, stellen Sie sicher, dass Sie ein Web-Framework mit Unterstützung für CSRF-Tokens verwenden, und nutzen Sie es.
  - Wenn Sie JavaScript-APIs wie `fetch()` oder `XMLHttpRequest` verwenden, um zustandsändernde Anfragen zu stellen, stellen Sie sicher, dass es sich nicht um einfache Anfragen handelt.
  - Unabhängig davon, welche Methode Sie verwenden, um Anfragen zu stellen, sollten Sie Fetch-Metadaten verwenden, um Cross-Site-Anfragen zu verbieten.
- Vermeiden Sie die Verwendung der `GET`-Methode, um zustandsändernde Anfragen zu stellen.
- Setzen Sie das `SameSite`-Attribut für Sitzungs-Cookies auf `Strict`, wenn möglich, oder auf `Lax`, wenn es notwendig ist.

## Siehe auch

- [Cross-Site Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)

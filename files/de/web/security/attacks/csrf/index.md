---
title: Cross-Site-Request-Forgery (CSRF)
slug: Web/Security/Attacks/CSRF
l10n:
  sourceCommit: 64fd73863a11d246e6f2c94ebb8cf60463ebb9e7
---

Bei einem Cross-Site-Request-Forgery (CSRF)-Angriff täuscht ein Angreifer den Benutzer oder den Browser dazu, eine HTTP-Anfrage von einer bösartigen Website an die Zielseite zu senden. Die Anfrage enthält die Anmeldeinformationen des Benutzers und veranlasst den Server, eine schädliche Aktion auszuführen, in dem Glauben, dass der Benutzer diese beabsichtigt hat.

## Übersicht

Eine Website führt typischerweise spezielle Aktionen im Namen eines Benutzers aus – z.B. den Kauf eines Produkts oder die Vereinbarung eines Termins – indem sie eine HTTP-Anfrage vom Browser des Benutzers erhält, oft mit Parametern, die die auszuführende Aktion detailliert beschreiben. Um sicherzustellen, dass die Anfrage wirklich vom betreffenden Benutzer stammt, erwartet der Server, dass die Anfrage die {{Glossary("Credential", "Anmeldeinformationen")}} des Benutzers enthält: zum Beispiel ein Cookie, das die Sitzung-ID des Benutzers enthält.

Im folgenden Beispiel hat sich der Benutzer zuvor bei seiner Bank angemeldet und der Browser hat ein Sitzungscookie für den Benutzer gespeichert. Die Seite enthält ein {{htmlelement("form")}}, das es dem Benutzer ermöglicht, Gelder auf eine andere Person zu überweisen. Wenn der Benutzer das Formular übermittelt, sendet der Browser eine {{httpmethod("POST")}}-Anfrage an den Server, einschließlich der Formulardaten. Wenn der Benutzer angemeldet ist, enthält die Anfrage das Cookie des Benutzers. Der Server validiert das Cookie und führt die spezielle Aktion aus – in diesem Fall die Überweisung von Geld:

![Diagramm, das zeigt, wie ein Benutzer ein Browserformular absendet, der Browser dann eine POST-Anfrage an den Server sendet und der Server die Anfrage validiert.](form-post.svg)

In diesem Leitfaden nennen wir eine solche Anfrage, die eine besondere Aktion ausführt, eine _zustandsverändernde Anfrage_.

Bei einem CSRF-Angriff erstellt der Angreifer eine Website, die ein Formular enthält. Das [`action`-Attribut](/de/docs/Web/HTML/Element/form#action) des Formulars ist auf die Website der Bank gesetzt und das Formular enthält versteckte Eingabefelder, die die Felder der Bank nachahmen:

```html
<form action="https://my-bank.example.org/transfer" method="POST">
  <input type="hidden" name="recipient" value="attacker" />
  <input type="hidden" name="amount" value="1000" />
</form>
```

Die Seite enthält auch JavaScript, das das Formular beim Laden der Seite absendet:

```js
const form = document.querySelector("form");
form.submit();
```

Wenn der Benutzer die Seite besucht, sendet der Browser das Formular an die Website der Bank. Da der Benutzer bei seiner Bank angemeldet ist, kann die Anfrage das echte Cookie des Benutzers enthalten, sodass der Server der Bank die Anfrage erfolgreich validiert und die Gelder überweist:

![Diagramm, das einen CSRF-Angriff zeigt, bei dem eine Scheinseite eine POST-Anfrage an die Website der Bank des Benutzers sendet.](csrf-form-post.svg)

Es gibt weitere Möglichkeiten, wie der Angreifer eine Cross-Site-Request-Forgery vornehmen könnte. Wenn die Website zum Beispiel eine {{httpmethod("GET")}}-Anfrage verwendet, um die Aktion auszuführen, dann kann der Angreifer ganz darauf verzichten, ein Formular zu verwenden, und den Angriff ausführen, indem er dem Benutzer einen Link zu einer Seite sendet, die etwa folgendes Markup enthält:

```html
<img
  src="https://my-bank.example.org/transfer?recipient=attacker&amount=1000" />
```

Wenn der Benutzer die Seite lädt, versucht der Browser, die Bildressource abzurufen, die in Wirklichkeit die Transaktionsanfrage ist.

Im Allgemeinen ist ein CSRF-Angriff möglich, wenn Ihre Website:

- HTTP-Anfragen verwendet, um einen Zustand auf dem Server zu ändern.
- Nur Cookies verwendet, um zu validieren, dass die Anfrage von einem authentifizierten Benutzer stammt.
- Nur Parameter in der Anfrage verwendet, die ein Angreifer vorhersagen kann.

## Abwehrmaßnahmen gegen CSRF

In diesem Abschnitt skizzieren wir drei alternative Abwehrmaßnahmen gegen CSRF und eine vierte Praxis, die zur Verteidigung in der Tiefe bei einer der anderen verwendet werden kann.

- Die erste primäre Verteidigung ist die [Verwendung von _CSRF-Token_](#csrf-token), die in die Seite eingebettet sind. Dies ist die gebräuchlichste Methode, wenn Sie zustandsverändernde Anfragen von Formularelementen aus geben, wie in unserem obigen Beispiel.

- Die zweite Möglichkeit ist die [Verwendung von _Fetch-Metadaten_](fetch_metadata) HTTP-Headern, um zu überprüfen, ob die zustandsverändernde Anfrage cross-site erteilt wird oder nicht.

- Drittens sollte sichergestellt werden, dass zustandsverändernde Anfragen [keine _einfachen Anfragen_](#vermeidung_einfacher_anfragen) sind, sodass cross-origin Anfragen standardmäßig blockiert werden. Diese Methode ist geeignet, wenn Sie zustandsverändernde Anfragen von JavaScript APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch) aus geben.

Zum Schluss besprechen wir [das `SameSite`-Cookie-Attribut](#defense_in_depth_samesite_cookies), das zur Verteidigung in der Tiefe neben einer der vorherigen Methoden verwendet werden kann.

### CSRF-Token

Bei dieser Abwehrmaßnahme bettet der Server beim Ausliefern einer Seite einen unvorhersehbaren Wert, den CSRF-Token, in die Seite ein. Wenn die legitime Seite die zustandsverändernde Anfrage an den Server sendet, ist der CSRF-Token in der HTTP-Anfrage enthalten. Der Server kann dann den Token-Wert überprüfen und führt die Anfrage nur aus, wenn er übereinstimmt. Da ein Angreifer den Token-Wert nicht erraten kann, kann er keinen erfolgreichen Angriff durchführen. Selbst wenn der Angreifer einen Token nach dessen Nutzung entdeckt, kann die Anfrage nicht erneut gesendet werden, wenn sich der Token jedes Mal ändert.

Bei Formulareinsendungen wird der CSRF-Token üblicherweise in einem versteckten Formularfeld mitgesendet, sodass er bei der Formulareinsendung automatisch an den Server zurückgesendet wird.

Bei einer JavaScript-API wie `fetch()` könnte der Token in einem Cookie abgelegt oder in die Seite eingebettet werden, und das JavaScript extrahiert den Wert und sendet ihn als zusätzlichen Header.

Moderne Web-Frameworks haben in der Regel integrierte Unterstützung für CSRF-Token: zum Beispiel ermöglicht Ihnen [Django](https://www.djangoproject.com/), Formulare durch das [`csrf_token`](https://docs.djangoproject.com/en/5.1/ref/csrf/) Tag zu schützen. Dies generiert ein zusätzliches verstecktes Formularfeld, das den Token enthält, den das Framework dann auf dem Server überprüft.

Um diesen Schutz zu nutzen, müssen Sie alle Stellen auf Ihrer Website verstehen, an denen Sie zustandsverändernde HTTP-Anfragen verwenden, und sicherstellen, dass Sie die von Ihrem gewählten Framework bereitgestellte Verteidigung nutzen.

### Fetch-Metadaten

Fetch-Metadaten sind eine Sammlung von HTTP-Anfrage-Headern, die vom Browser hinzugefügt werden und zusätzliche Informationen über den Kontext einer HTTP-Anfrage bereitstellen. Der Server kann diese Header nutzen, um zu entscheiden, ob eine Anfrage erlaubt werden soll oder nicht.

Am relevantesten für CSRF ist der {{httpheader("Sec-Fetch-Site")}} Header, der dem Server mitteilt, ob diese Anfrage vom gleichen Ursprung, der gleichen Seite, einer anderen Seite oder direkt vom Benutzer initiiert wurde. Der Server kann diese Information nutzen, um cross-origin Anfragen zu erlauben oder sie als potenzielle CSRF-Angriffe zu blockieren.

Zum Beispiel erlaubt dieser [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) Code nur Anfragen von der gleichen Seite und dem gleichen Ursprung:

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

Siehe {{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anfrage-Header")}} für die vollständige Liste der Fetch-Metadaten-Header und [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch-Metadaten](https://web.dev/articles/fetch-metadata) für eine Anleitung zur Nutzung dieser Funktion.

### Vermeidung einfacher Anfragen

Webbrowser unterscheiden zwischen zwei Arten von HTTP-Anfragen: [_einfache_ Anfragen](/de/docs/Web/HTTP/Guides/CORS#simple_requests) und andere Anfragen.

Einfache Anfragen, die durch das Absenden eines `<form>`-Elements resultieren, können ohne Blockierung über verschiedene Ursprünge hinweg getätigt werden. Da Formulare bereits seit den frühen Tagen des Webs Cross-Origin-Anfragen stellen konnten, ist es wichtig für die Kompatibilität, dass sie dies immer noch können. Aus diesem Grund müssen wir andere Strategien implementieren, um Formulare gegen CRSF zu verteidigen, wie die Verwendung eines CSRF-Tokens.

Andere Teile der Webplattform, insbesondere JavaScript APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch), können verschiedene Arten von Anfragen stellen (z.B. Anfragen, die benutzerdefinierte Header setzen), und diese Anfragen sind standardmäßig nicht Cross-Origin erlaubt, sodass ein CSRF-Angriff nicht erfolgreich wäre.

Eine Website, die `fetch()` oder `XMLHttpRequest` verwendet, kann sich daher gegen CSRF verteidigen, indem sie sicherstellt, dass die von ihr gestellten zustandsverändernden Anfragen niemals einfache Anfragen sind.

Zum Beispiel wird durch das Setzen von {{httpheader("Content-Type")}} der Anfrage auf `"application/json"` verhindert, dass sie als einfache Anfrage behandelt wird:

```js
fetch("https://my-bank.example.org/transfer", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ recipient: "joe", amount: "100" }),
});
```

Ebenso verhindert das Setzen eines benutzerdefinierten Headers in der Anfrage, dass sie als einfache Anfrage behandelt wird:

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

Der Server kann dann auf die Existenz des Headers überprüfen: Wenn er existiert, weiß der Server, dass die Anfrage nicht als einfache Anfrage behandelt wurde.

#### Nicht-einfache Anfragen und CORS

Wir haben gesagt, dass nicht-einfache Anfragen _standardmäßig_ nicht Cross-Origin gesendet werden. Der Haken dabei ist, dass das [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) Protokoll es einer Website ermöglicht, diese Einschränkung zu lockern.

Insbesondere ist Ihre Website anfällig für einen CSRF-Angriff von einem bestimmten Ursprung, wenn ihre Antwort auf eine zustandsverändernde Anfrage Folgendes enthält:

- Der {{httpheader("Access-Control-Allow-Origin")}} Antwort-Header, und der Header listet den Ursprung des Senders auf
- Der {{httpheader("Access-Control-Allow-Credentials")}} Antwort-Header.

### Verteidigung in der Tiefe: SameSite-Cookies

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Cookie-Attribut bietet einen gewissen Schutz gegen CSRF-Angriffe. Es ist keine vollständige Verteidigung und sollte als Ergänzung zu einem der anderen Verteidigungsmechanismen betrachtet werden, die ein gewisses Maß an Verteidigung in der Tiefe bieten.

Dieses Attribut steuert, wann ein Browser das Cookie in einer Cross-Site-Anfrage einfügen darf. Es hat drei mögliche Werte: `None`, `Lax` und `Strict`.

Der `Strict`-Wert bietet den meisten Schutz: Wenn dieses Attribut gesetzt ist, wird der Browser das Cookie in keiner Cross-Site-Anfrage einfügen. Dies führt jedoch zu einem Usability-Problem: Wenn der Benutzer auf Ihrer Seite angemeldet ist und einem Link von einer anderen Seite zu Ihrer Seite folgt, werden Ihre Cookies nicht eingeschlossen und der Benutzer wird nicht erkannt, wenn er Ihre Seite erreicht.

Der `Lax`-Wert lockert diese Einschränkung: Cookies werden in Cross-Site-Anfragen eingeschlossen, wenn beide der folgenden Bedingungen zutreffen:

- Die Anfrage war eine Navigation des Top-Level-Browsing-Kontexts.
- Die Anfrage verwendete eine {{Glossary("Safe/HTTP", "sichere")}} Methode: insbesondere ist {{httpmethod("GET")}} sicher, während {{httpmethod("POST")}} nicht sicher ist.

Jedoch bietet `Lax` einen erheblich schwächeren Schutz als `Strict`:

- Ein Angreifer kann eine Top-Level-Navigation auslösen. Zum Beispiel zeigen wir zu Beginn dieses Artikels einen CSRF-Angriff, bei dem der Angreifer ein Formular an das Ziel sendet: dies wird als Top-Level-Navigation betrachtet. Wenn das Formular mit `GET` gesendet würde, dann würde die Anfrage weiterhin Cookies mit `SameSite=Lax` enthalten.
- Selbst wenn der Server überprüft, dass die Anfrage nicht mit `GET` gesendet wurde, unterstützen einige Web-Frameworks die "Methodenüberschreibung": dies ermöglicht es einem Angreifer, eine Anfrage mit `GET` zu senden, aber sie erscheint dem Server, als ob sie mit `POST` gesendet wurde.

Als allgemeine Anleitung sollten Sie versuchen, `Strict` für einige Cookies und `Lax` für andere zu verwenden:

- `Lax` für Cookies, die Sie verwenden, um zu entscheiden, ob einem angemeldeten Benutzer eine Seite angezeigt werden soll
- `Strict` für Cookies, die Sie für zustandsverändernde Anfragen verwenden, die Sie nicht Cross-Site zulassen möchten.

Ein weiteres Problem mit dem `SameSite`-Attribut ist, dass es Sie vor Anfragen von einer anderen {{Glossary("Site", "Seite")}} und nicht von einem anderen {{Glossary("Origin", "Ursprung")}} schützt. Dies ist ein schwächerer Schutz, weil (zum Beispiel) `https://foo.example.org` und `https://bar.example.org` als die gleiche Seite betrachtet werden, obwohl sie unterschiedliche Ursprünge sind. Wenn Sie sich auf den Same-Site-Schutz verlassen, müssen Sie effektiv allen Subdomains Ihrer Seite vertrauen.

Siehe [Umgehung von SameSite Cookie-Einschränkungen](https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions) für weitere Details zu den Einschränkungen von `SameSite`.

### Zusammenfassung der Abwehrmaßnahmen-Checkliste

Wir können die oben genannten Abwehrmaßnahmen wie folgt zusammenfassen:

- Verstehen Sie, wo in Ihrer Website Sie zustandsverändernde Anfragen implementieren, die Session-Cookies verwenden, um zu überprüfen, welcher Benutzer die Anfrage gestellt hat.
- Implementieren Sie mindestens eine der in diesem Dokument beschriebenen primären Abwehrmaßnahmen:
  - Wenn Sie `<form>`-Elemente verwenden, um diese Anfragen zu stellen, stellen Sie sicher, dass Sie ein Web-Framework mit Unterstützung für CSRF-Token verwenden, und nutzen Sie es.
  - Wenn Sie JavaScript APIs wie `fetch()` oder `XMLHttpRequest` verwenden, um zustandsverändernde Anfragen zu stellen, stellen Sie sicher, dass es sich nicht um einfache Anfragen handelt.
  - Unabhängig von dem Mechanismus, den Sie zur Übermittlung von Anfragen verwenden, sollten Sie die Verwendung von Fetch-Metadaten in Betracht ziehen, um Cross-Site-Anfragen zu verbieten.
- Vermeiden Sie die Verwendung der `GET`-Methode für zustandsverändernde Anfragen.
- Setzen Sie das `SameSite`-Attribut für Session-Cookies auf `Strict`, wenn möglich, oder auf `Lax`, wenn es erforderlich ist.

## Siehe auch

- [Cross-Site Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Security", "1", "0", "1")}}
</section>

---
title: Cross-Site Request Forgery (CSRF)
slug: Web/Security/Attacks/CSRF
l10n:
  sourceCommit: e142af8b967180298c5718a381cb8953434b175f
---

Bei einem Cross-Site Request Forgery (CSRF)-Angriff bringt ein Angreifer den Benutzer oder den Browser dazu, eine HTTP-Anfrage an die Zielseite von einer bösartigen Seite aus zu senden. Die Anfrage enthält die Benutzeranmeldedaten und veranlasst den Server, eine schädliche Aktion durchzuführen, weil er denkt, dass der Benutzer die Aktion beabsichtigt hat.

## Überblick

Eine Website führt in der Regel spezielle Aktionen im Namen eines Benutzers aus – zum Beispiel den Kauf eines Produkts oder die Vereinbarung eines Termins – indem sie eine HTTP-Anfrage vom Browser des Benutzers erhält, oft mit Parametern, die die auszuführende Aktion detailliert beschreiben. Um sicherzustellen, dass die Anfrage wirklich vom betreffenden Benutzer stammt, erwartet der Server, dass die Anfrage {{Glossary("Credential", "Anmeldedaten")}} für den Benutzer enthält: zum Beispiel ein Cookie mit der Sitzungs-ID des Benutzers.

Im untenstehenden Beispiel hat sich der Benutzer zuvor in sein Bankkonto eingeloggt, und der Browser hat ein Sitzungs-Cookie für den Benutzer gespeichert. Die Seite enthält ein {{htmlelement("form")}}-Element, das es dem Benutzer ermöglicht, Geld an eine andere Person zu überweisen. Wenn der Benutzer das Formular absendet, sendet der Browser eine {{httpmethod("POST")}}-Anfrage an den Server, einschließlich der Formulardaten. Ist der Benutzer eingeloggt, enthält die Anfrage das Cookie des Benutzers. Der Server validiert das Cookie und führt die spezielle Aktion aus – in diesem Fall die Überweisung von Geld:

![Diagramm zeigt einen Benutzer, der ein Browser-Formular absendet, wobei der Browser dann eine POST-Anfrage an den Server stellt und der Server die Anfrage validiert.](form-post.svg)

In diesem Leitfaden nennen wir eine solche Anfrage, die eine spezielle Aktion ausführt, eine _statusverändernde Anfrage_.

Bei einem CSRF-Angriff erstellt der Angreifer eine Website mit einem Formular. Das Formular hat das [`action`-Attribut](/de/docs/Web/HTML/Reference/Elements/form#action), das auf die Website der Bank gesetzt ist, und das Formular enthält versteckte Eingabefelder, die die Felder der Bank nachahmen:

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

Wenn der Benutzer die Seite besucht, sendet der Browser das Formular an die Website der Bank. Da der Benutzer in die Bank eingeloggt ist, kann die Anfrage das echte Cookie des Benutzers enthalten, sodass der Server der Bank die Anfrage erfolgreich validiert und die Gelder überweist:

![Diagramm zeigt einen CSRF-Angriff, bei dem eine Köderseite eine POST-Anfrage an die Website der Bank des Benutzers absendet.](csrf-form-post.svg)

Es gibt andere Möglichkeiten, wie der Angreifer eine Cross-Site Request Forgery durchführen könnte. Zum Beispiel, wenn die Website eine {{httpmethod("GET")}}-Anfrage verwendet, um die Aktion auszuführen, dann kann der Angreifer vermeiden, ein Formular verwenden zu müssen, und die Attacke ausführen, indem er dem Benutzer einen Link zu einer Seite sendet, die Markup wie dieses enthält:

```html
<img
  src="https://my-bank.example.org/transfer?recipient=attacker&amount=1000" />
```

Wenn der Benutzer die Seite lädt, versucht der Browser, die Bildressource abzurufen, die in Wirklichkeit die Transaktionsanfrage ist.

Im Allgemeinen ist ein CSRF-Angriff möglich, wenn Ihre Website:

- HTTP-Anfragen verwendet, um einen Zustand auf dem Server zu ändern.
- Nur Cookies verwendet, um zu validieren, dass die Anfrage von einem authentifizierten Benutzer stammt.
- Nur Parameter in der Anfrage verwendet, die ein Angreifer vorhersehen kann.

## Verteidigungen gegen CSRF

In diesem Abschnitt skizzieren wir drei alternative Verteidigungen gegen CSRF und eine vierte Praxis, die zur tiefergehenden Verteidigung für eine der anderen verwendet werden kann.

- Die erste primäre Verteidigung besteht darin, [CSRF-Tokens zu verwenden](#csrf-tokens), die in die Seite eingebettet sind. Dies ist die gängigste Methode, wenn Sie statusverändernde Anfragen von Formularelementen ausstellen, wie in unserem obigen Beispiel.

- Die zweite ist die Verwendung von [Fetch-Metadaten](#fetch-metadaten) HTTP-Headern, um zu überprüfen, ob die statusverändernde Anfrage siteübergreifend ausgeführt wird oder nicht.

- Die dritte besteht darin sicherzustellen, dass statusverändernde Anfragen [keine _einfachen Anfragen_](#vermeidung_von_einfachen_anfragen) sind, damit Cross-Origin-Anfragen standardmäßig blockiert werden. Diese Methode ist geeignet, wenn Sie statusverändernde Anfragen über JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch) ausstellen.

Schließlich besprechen wir das [Cookie-Attribut `SameSite`](#defense_in_depth_samesite_cookies), das als zusätzliche Verteidigung neben einer der vorherigen Methoden verwendet werden kann.

### CSRF-Tokens

Bei dieser Verteidigung, wenn der Server eine Seite bereitstellt, bettet er einen unvorhersehbaren Wert in die Seite ein, genannt CSRF-Token. Wenn dann die legitime Seite die statusverändernde Anfrage an den Server sendet, enthält sie das CSRF-Token in der HTTP-Anfrage. Der Server kann dann den Token-Wert überprüfen und die Anfrage nur ausführen, wenn er übereinstimmt. Da ein Angreifer den Token-Wert nicht erraten kann, kann er keine erfolgreiche Fälschung ausführen. Selbst wenn der Angreifer einen Token nach dessen Verwendung entdeckt, kann die Anfrage nicht wiederholt werden, wenn der Token sich jedes Mal ändert.

Bei Formularübermittlungen wird das CSRF-Token normalerweise in ein verstecktes Formularfeld eingefügt, sodass es beim Absenden des Formulars automatisch zur Überprüfung an den Server zurückgesendet wird.

Für eine JavaScript-API wie `fetch()` könnte das Token in einem Cookie gespeichert oder in die Seite eingebettet werden, und das JavaScript extrahiert den Wert und sendet ihn als zusätzlichen Header.

Moderne Web-Frameworks haben normalerweise eingebaute Unterstützung für CSRF-Tokens: zum Beispiel ermöglicht [Django](https://www.djangoproject.com/) Ihnen, Formulare mit dem [`csrf_token`](https://docs.djangoproject.com/en/5.1/ref/csrf/) Tag zu schützen. Dies generiert ein zusätzliches verstecktes Formularfeld, das das Token enthält, das das Framework dann auf dem Server überprüft.

Um von diesem Schutz zu profitieren, müssen Sie alle Stellen auf Ihrer Website verstehen, an denen Sie statusverändernde HTTP-Anfragen verwenden, und sicherstellen, dass Sie die Verteidigung Ihres gewählten Frameworks verwenden.

### Fetch-Metadaten

Fetch-Metadaten sind eine Sammlung von HTTP-Anfrage-Headern, die vom Browser hinzugefügt werden und zusätzliche Informationen über den Kontext einer HTTP-Anfrage liefern. Der Server kann diese Header verwenden, um zu entscheiden, ob er eine Anfrage zulässt oder nicht.

Für CSRF am wichtigsten ist der {{httpheader("Sec-Fetch-Site")}} Header, der dem Server mitteilt, ob diese Anfrage direkt von demselben Ursprung, derselben Site, von Cross-Site oder direkt vom Benutzer initiiert wurde. Der Server kann diese Informationen verwenden, um Cross-Origin-Anfragen zuzulassen oder sie als potenzielle CSRF-Angriffe zu blockieren.

Zum Beispiel erlaubt dieser [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) Code nur Anfragen von derselben Site und demselben Ursprung:

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

Siehe {{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anfrage-Header")}} für die vollständige Liste der Fetch-Metadaten-Header und [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch-Metadaten](https://web.dev/articles/fetch-metadata) für einen Leitfaden zur Nutzung dieser Funktion.

### Vermeidung von einfachen Anfragen

Webbrowser unterscheiden zwei Arten von HTTP-Anfragen: _einfache_ Anfragen und andere Anfragen.

Einfache Anfragen, das sind Anfragen, die aus einem `<form>`-Elementresultieren, können _cross-origin_ gesendet werden, ohne blockiert zu werden. Da Formulare seit den frühen Tagen des Webs _cross-origin_ Anfragen stellen können, ist es wichtig für die Kompatibilität, dass sie weiterhin _cross-origin_ Anfragen stellen können. Deshalb müssen wir andere Strategien implementieren, um Formulare gegen CSRF zu verteidigen, wie die Verwendung eines CSRF-Tokens.

Allerdings können andere Teile der Webplattform, insbesondere JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch), verschiedene Arten von Anfragen stellen (zum Beispiel Anfragen, die benutzerdefinierte Header setzen), und diese Anfragen sind standardmäßig nicht _cross-origin_ erlaubt, sodass ein CSRF-Angriff nicht erfolgreich wäre.

Eine Website, die `fetch()` oder `XMLHttpRequest` verwendet, kann sich gegen CSRF verteidigen, indem sie sicherstellt, dass die von ihr ausgegebenen statusverändernden Anfragen niemals einfache Anfragen sind.

Zum Beispiel wird das Einstellen des {{httpheader("Content-Type")}} der Anfrage auf `"application/json"` verhindern, dass sie als einfache Anfrage behandelt wird:

```js
fetch("https://my-bank.example.org/transfer", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ recipient: "joe", amount: "100" }),
});
```

Ähnlich verhindert das Setzen eines benutzerdefinierten Headers auf der Anfrage, dass sie als einfache Anfrage behandelt wird:

```js
fetch("https://my-bank.example.org/transfer", {
  method: "POST",
  headers: {
    "X-MY-BANK-ANTI-CSRF": 1,
  },
  body: JSON.stringify({ recipient: "joe", amount: "100" }),
});
```

Der Headername kann beliebig sein, solange er nicht mit Standard-Headern in Konflikt steht.

Der Server kann dann überprüfen, ob der Header existiert: wenn er existiert, dann weiß der Server, dass die Anfrage nicht als einfache Anfrage behandelt wurde.

#### Nicht-einfache Anfragen und CORS

Wir haben gesagt, dass nicht-einfache Anfragen _standardmäßig_ nicht _cross-origin_ gesendet werden. Der Haken ist, dass das [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) Protokoll es einer Website ermöglicht, diese Einschränkung zu lockern.

Insbesondere ist Ihre Website anfällig für einen CSRF-Angriff von einem bestimmten Ursprung, wenn die Antwort auf eine statusverändernde Anfrage Folgendes enthält:

- Den {{httpheader("Access-Control-Allow-Origin")}} Antwort-Header, und der Header listet den Ursprung des Senders auf.
- Den {{httpheader("Access-Control-Allow-Credentials")}} Antwort-Header.

### Tiefergehende Verteidigung: SameSite-Cookies

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesite) Cookie-Attribut bietet einen gewissen Schutz gegen CSRF-Angriffe. Es ist keine vollständige Verteidigung und sollte eher als Ergänzung zu einer der anderen Verteidigungsmethoden angesehen werden, die eine gewisse Verteidigung in der Tiefe bieten.

Dieses Attribut steuert, wann ein Browser das Cookie in einer _cross-site_ Anfrage einschließen darf. Es gibt drei mögliche Werte: `None`, `Lax` und `Strict`.

Der `Strict`-Wert bietet den meisten Schutz: wenn dieses Attribut gesetzt ist, wird der Browser das Cookie in keiner _cross-site_ Anfrage einschließen. Dies führt jedoch zu einem Usability-Problem: wenn der Benutzer in Ihre Website eingeloggt ist und einem Link von einer anderen Website zu Ihrer Website folgt, dann werden Ihre Cookies nicht eingeschlossen, und der Benutzer wird nicht erkannt, wenn er Ihre Website erreicht.

Der `Lax`-Wert lockert diese Einschränkung: Cookies werden in _cross-site_ Anfragen eingeschlossen, wenn beide der folgenden Bedingungen zutreffen:

- Die Anfrage war eine Navigation des obersten Browsing-Kontextes.
- Die Anfrage verwendete eine {{Glossary("Safe/HTTP", "sichere Methode")}}: insbesondere ist {{httpmethod("GET")}} sicher, aber {{httpmethod("POST")}} ist es nicht.

Allerdings bietet `Lax` deutlich schwächeren Schutz als `Strict`:

- Ein Angreifer kann eine Navigation des obersten Kontexts auslösen. Zum Beispiel zeigen wir zu Beginn dieses Artikels einen CSRF-Angriff, bei dem der Angreifer ein Formular an das Ziel absendet: dies wird als Navigation des obersten Kontexts betrachtet. Wenn das Formular unter Verwendung von `GET` abgesendet würde, dann würde die Anfrage trotzdem Cookies mit `SameSite=Lax` enthalten.
- Selbst wenn der Server überprüft, dass die Anfrage nicht unter Verwendung von `GET` gesendet wurde, unterstützen einige Web-Frameworks "Methodenüberschreibung": dies ermöglicht einem Angreifer, eine Anfrage unter Verwendung von `GET` zu senden, aber sie erscheint dem Server, als ob sie `POST` verwendet hätte.

Im Allgemeinen sollten Sie daher versuchen, `Strict` für einige Cookies und `Lax` für andere zu verwenden:

- `Lax` für Cookies, die Sie verwenden werden, um zu entscheiden, ob einem eingeloggten Benutzer eine Seite angezeigt werden soll.
- `Strict` für Cookies, die Sie für statusverändernde Anfragen verwenden, die Sie nicht _cross-site_ zulassen möchten.

Ein weiteres Problem mit dem `SameSite`-Attribut ist, dass es Sie vor Anfragen von einer anderen {{Glossary("Site", "Site")}} und nicht von einem anderen {{Glossary("Origin", "Ursprung")}} schützt. Dies ist ein lockererer Schutz, weil (zum Beispiel) `https://foo.example.org` und `https://bar.example.org` als dieselbe Site betrachtet werden, obwohl sie unterschiedliche Ursprünge sind. Effektiv, wenn Sie sich auf den Schutz derselben Site verlassen, müssen Sie allen Subdomains Ihrer Site vertrauen.

Siehe [Umgehen von SameSite-Cookie-Einschränkungen](https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions) für weitere Details zu den Einschränkungen von `SameSite`.

### Verteidigungs-Checkliste

Wir können die oben genannten Verteidigungen wie folgt zusammenfassen:

- Verstehen Sie, wo auf Ihrer Website Sie statusverändernde Anfragen implementieren, die Sitzungscookies verwenden, um zu überprüfen, welcher Benutzer die Anfrage ausgestellt hat.
- Implementieren Sie mindestens eine der primären Verteidigungen, die in diesem Dokument beschrieben sind:
  - Wenn Sie `<form>`-Elemente für diese Anfragen verwenden, stellen Sie sicher, dass Sie ein Web-Framework mit Unterstützung für CSRF-Tokens verwenden und nutzen Sie es.
  - Wenn Sie JavaScript-APIs wie `fetch()` oder `XMLHttpRequest` verwenden, um statusverändernde Anfragen zu stellen, stellen Sie sicher, dass es sich nicht um einfache Anfragen handelt.
  - Unabhängig vom verwendeten Mechanismus, ziehen Sie die Verwendung von Fetch-Metadaten in Betracht, um _cross-site_ Anfragen zu untersagen.
- Vermeiden Sie die Verwendung der `GET`-Methode, um statusverändernde Anfragen zu stellen.
- Setzen Sie das `SameSite`-Attribut für Sitzungscookies auf `Strict`, wenn Sie können, oder `Lax`, wenn Sie müssen.

## Siehe auch

- [Cross-Site Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)

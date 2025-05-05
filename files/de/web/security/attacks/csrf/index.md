---
title: Cross-Site Request Forgery (CSRF)
slug: Web/Security/Attacks/CSRF
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

Bei einem Cross-Site Request Forgery (CSRF)-Angriff bringt ein Angreifer den Benutzer oder den Browser dazu, eine HTTP-Anfrage von einer bösartigen Site zur Zielseite zu senden. Die Anfrage enthält die Anmeldeinformationen des Benutzers und veranlasst den Server dazu, eine schädliche Aktion auszuführen, von der angenommen wird, dass der Benutzer sie beabsichtigt hat.

## Überblick

Eine Website führt in der Regel spezielle Aktionen im Namen eines Benutzers aus – zum Beispiel den Kauf eines Produkts oder das Vereinbaren eines Termins –, indem sie eine HTTP-Anfrage vom Browser des Benutzers erhält, häufig mit Parametern, die die auszuführende Aktion detailliert beschreiben. Um sicherzustellen, dass die Anfrage wirklich vom betreffenden Benutzer stammt, erwartet der Server, dass die Anfrage die {{Glossary("Credential", "Anmeldeinformationen")}} des Benutzers enthält: beispielsweise ein Cookie mit der Sitzungs-ID des Benutzers.

Im folgenden Beispiel hat sich der Benutzer zuvor bei seiner Bank eingeloggt, und der Browser hat ein Sitzungs-Cookie für den Benutzer gespeichert. Die Seite enthält ein {{htmlelement("form")}}-Element, das es dem Benutzer ermöglicht, Geld an eine andere Person zu überweisen. Wenn der Benutzer das Formular übermittelt, sendet der Browser eine {{httpmethod("POST")}}-Anfrage an den Server, einschließlich der Formulardaten. Wenn der Benutzer eingeloggt ist, enthält die Anfrage das Cookie des Benutzers. Der Server validiert das Cookie und führt die spezielle Aktion aus – in diesem Fall die Überweisung von Geld:

![Diagramm, das zeigt, wie ein Benutzer ein Browserformular übermittelt, der Browser dann eine POST-Anfrage an den Server sendet und der Server die Anfrage validiert.](form-post.svg)

In diesem Leitfaden bezeichnen wir eine solche Anfrage, die eine spezielle Aktion ausführt, als _statusändernde Anfrage_.

Bei einem CSRF-Angriff erstellt der Angreifer eine Website, die ein Formular enthält. Das [`action`-Attribut](/de/docs/Web/HTML/Reference/Elements/form#action) des Formulars ist auf die Website der Bank gesetzt, und das Formular enthält versteckte Eingabefelder, die den Feldern der Bank ähneln:

```html
<form action="https://my-bank.example.org/transfer" method="POST">
  <input type="hidden" name="recipient" value="attacker" />
  <input type="hidden" name="amount" value="1000" />
</form>
```

Die Seite enthält auch JavaScript, das das Formular beim Laden der Seite übermittelt:

```js
const form = document.querySelector("form");
form.submit();
```

Wenn der Benutzer die Seite besucht, übermittelt der Browser das Formular zur Website der Bank. Da der Benutzer bei seiner Bank eingeloggt ist, kann die Anfrage das tatsächliche Cookie des Benutzers enthalten, sodass der Server der Bank die Anfrage erfolgreich validiert und die Gelder überweist:

![Diagramm, das einen CSRF-Angriff zeigt, bei dem eine Köderseite eine POST-Anfrage an die Website der Bank des Benutzers übermittelt.](csrf-form-post.svg)

Es gibt andere Möglichkeiten, wie der Angreifer eine Cross-Site Request Forgery durchführen könnte. Wenn die Website zum Beispiel eine {{httpmethod("GET")}}-Anfrage zur Durchführung der Aktion verwendet, kann der Angreifer das Formular gänzlich vermeiden und den Angriff ausführen, indem er dem Benutzer einen Link zu einer Seite sendet, die Markup wie dieses enthält:

```html
<img
  src="https://my-bank.example.org/transfer?recipient=attacker&amount=1000" />
```

Wenn der Benutzer die Seite lädt, versucht der Browser, die Bildressource abzurufen, die wirklich die Transaktionsanfrage ist.

Im Allgemeinen ist ein CSRF-Angriff möglich, wenn Ihre Website:

- HTTP-Anfragen verwendet, um einen Zustand auf dem Server zu ändern.
- Nur Cookies verwendet, um zu validieren, dass die Anfrage von einem authentifizierten Benutzer stammt.
- Nur Parameter in der Anfrage verwendet, die ein Angreifer voraussagen kann.

## Abwehrmaßnahmen gegen CSRF

In diesem Abschnitt skizzieren wir drei alternative Abwehrmaßnahmen gegen CSRF und eine vierte Praxis, die verwendet werden kann, um eine tiefere Verteidigung entweder der einen oder der anderen zu bieten.

- Die erste primäre Abwehrmaßnahme besteht darin, [CSRF-Tokens](#csrf-tokens) in die Seite einzubetten. Dies ist die gebräuchlichste Methode, wenn Sie statusändernde Anfragen von Formularelementen ausstellen, wie in unserem obigen Beispiel.

- Die zweite besteht darin, [Fetch-Metadaten](#fetch-metadaten)-HTTP-Header zu verwenden, um zu überprüfen, ob die statusändernde Anfrage standortübergreifend ausgegeben wird.

- Die dritte besteht darin sicherzustellen, dass statusändernde Anfragen [keine einfachen Anfragen](#vermeidung_einfacher_anfragen) sind, damit standortübergreifende Anfragen standardmäßig blockiert werden. Diese Methode ist geeignet, wenn Sie statusändernde Anfragen von JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch) aus ausgeben.

Schließlich werden wir das [`SameSite`-Cookie-Attribut](#defense_in_depth_samesite_cookies) besprechen, das verwendet werden kann, um eine tiefere Verteidigung neben einer der vorherigen Methoden zu bieten.

### CSRF-Tokens

Bei dieser Abwehrmaßnahme bettet der Server beim Bereitstellen einer Seite einen unvorhersehbaren Wert, das CSRF-Token, in die Seite ein. Wenn die legitime Seite die statusändernde Anfrage an den Server sendet, wird das CSRF-Token in die HTTP-Anfrage eingeschlossen. Der Server kann dann den Token-Wert überprüfen und die Anfrage nur ausführen, wenn er übereinstimmt. Da ein Angreifer den Token-Wert nicht erraten kann, kann er keine erfolgreiche Fälschung ausstellen. Selbst wenn der Angreifer ein Token entdeckt, nachdem es verwendet wurde, kann die Anfrage nicht erneut ausgeführt werden, wenn sich das Token bei jeder Anfrage ändert.

Für Formularübermittlungen wird das CSRF-Token normalerweise in einem versteckten Formularfeld eingeschlossen, sodass es bei der Übermittlung automatisch an den Server zur Überprüfung zurückgesendet wird.

Für eine JavaScript-API wie `fetch()` kann der Token in ein Cookie eingefügt oder in die Seite eingebettet werden, und das JavaScript extrahiert den Wert und sendet ihn als zusätzlichen Header.

Moderne Web-Frameworks haben in der Regel eine eingebaute Unterstützung für CSRF-Tokens: zum Beispiel ermöglicht [Django](https://www.djangoproject.com/), dass Sie Formulare mit dem [`csrf_token`](https://docs.djangoproject.com/en/5.1/ref/csrf/)-Tag schützen. Dies generiert ein zusätzliches verstecktes Formularfeld, das den Token enthält, den das Framework dann auf dem Server überprüft.

Um diesen Schutz zu nutzen, müssen Sie alle Stellen auf Ihrer Website verstehen, an denen Sie statusändernde HTTP-Anfragen verwenden, und sicherstellen, dass Sie die Unterstützung des von Ihnen gewählten Frameworks nutzen.

### Fetch-Metadaten

Fetch-Metadaten sind eine Sammlung von HTTP-Request-Headern, die vom Browser hinzugefügt werden und zusätzliche Informationen über den Kontext einer HTTP-Anfrage liefern. Der Server kann diese Header verwenden, um zu entscheiden, ob eine Anfrage zugelassen werden soll oder nicht.

Am relevantesten für CSRF ist der {{httpheader("Sec-Fetch-Site")}}-Header, der dem Server mitteilt, ob diese Anfrage same-origin, same-site, cross-site oder direkt vom Benutzer initiiert ist. Der Server kann diese Informationen verwenden, um standortübergreifende Anfragen zuzulassen oder sie als potenzielle CSRF-Angriffe zu blockieren.

Zum Beispiel erlaubt dieser [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)-Code nur same-site- und same-origin-Anfragen:

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

Siehe {{Glossary("Fetch_metadata_request_header", "Fetch metadata request header")}} für die vollständige Liste der Fetch-Metadaten-Header und [Protect your resources from web attacks with Fetch Metadata](https://web.dev/articles/fetch-metadata) für einen Leitfaden zur Nutzung dieser Funktion.

### Vermeidung einfacher Anfragen

Webbrowser unterscheiden zwei Arten von HTTP-Anfragen: [_einfache_ Anfragen](/de/docs/Web/HTTP/Guides/CORS#simple_requests) und andere Anfragen.

Einfache Anfragen, die durch die Übermittlung eines `<form>`-Elements resultieren, können standortübergreifend durchgeführt werden, ohne blockiert zu werden. Da Formulare seit den Anfängen des Web standortübergreifende Anfragen stellen konnten, ist es wichtig, dass sie aus Kompatibilitätsgründen weiterhin standortübergreifende Anfragen stellen können. Deshalb müssen wir andere Strategien implementieren, um Formulare gegen CSRF zu schützen, wie z. B. die Verwendung eines CSRF-Tokens.

Andere Teile der Web-Plattform, insbesondere JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch), können jedoch andere Arten von Anfragen stellen (zum Beispiel Anfragen, die benutzerdefinierte Header festlegen), und diese Anfragen dürfen standardmäßig nicht standortübergreifend erfolgen, sodass ein CSRF-Angriff nicht erfolgreich wäre.

Eine Website, die `fetch()` oder `XMLHttpRequest` verwendet, kann sich gegen CSRF verteidigen, indem sie sicherstellt, dass die von ihr gestellten statusändernden Anfragen niemals einfache Anfragen sind.

Zum Beispiel verhindert das Festlegen des {{httpheader("Content-Type")}} der Anfrage auf `"application/json"`, dass sie als einfache Anfrage behandelt wird:

```js
fetch("https://my-bank.example.org/transfer", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ recipient: "joe", amount: "100" }),
});
```

Ebenso verhindert das Festlegen eines benutzerdefinierten Headers in der Anfrage, dass sie als einfache Anfrage behandelt wird:

```js
fetch("https://my-bank.example.org/transfer", {
  method: "POST",
  headers: {
    "X-MY-BANK-ANTI-CSRF": 1,
  },
  body: JSON.stringify({ recipient: "joe", amount: "100" }),
});
```

Der Headername kann alles sein, solange er nicht mit Standard-Headern in Konflikt steht.

Der Server kann dann das Vorhandensein des Headers prüfen: Wenn er existiert, weiß der Server, dass die Anfrage nicht als einfache Anfrage behandelt wurde.

#### Nicht-einfache Anfragen und CORS

Wir haben gesagt, dass nicht-einfache Anfragen _standardmäßig_ nicht standortübergreifend gesendet werden. Der Haken dabei ist, dass das [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)-Protokoll einer Website erlaubt, diese Beschränkung zu lockern.

Konkret wäre Ihre Website von einem CSRF-Angriff aus einem bestimmten Ursprung gefährdet, wenn ihre Antwort auf eine statusändernde Anfrage Folgendes enthält:

- Den {{httpheader("Access-Control-Allow-Origin")}}-Antwort-Header, und der Header listet den Ursprung des Absenders auf.
- Den {{httpheader("Access-Control-Allow-Credentials")}}-Antwort-Header.

### Verteidigung in der Tiefe: SameSite-Cookies

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Cookie-Attribut bietet einen gewissen Schutz gegen CSRF-Angriffe. Es ist kein vollständiger Schutz und sollte eher als Ergänzung zu einer der anderen Abwehrmaßnahmen betrachtet werden, um eine gewisse Tiefe der Verteidigung zu bieten.

Dieses Attribut steuert, wann ein Browser das Cookie in einer standortübergreifenden Anfrage einbeziehen darf. Es gibt drei mögliche Werte: `None`, `Lax` und `Strict`.

Der `Strict`-Wert bietet den meisten Schutz: Wenn dieses Attribut gesetzt ist, wird der Browser das Cookie in keiner standortübergreifenden Anfrage einbeziehen. Dies schafft jedoch ein Problem mit der Benutzbarkeit: Wenn der Benutzer auf Ihrer Seite eingeloggt ist und einem Link zu Ihrer Seite von einer anderen Webseite folgt, werden Ihre Cookies nicht einbezogen und der Benutzer wird nicht erkannt, wenn er Ihre Seite erreicht.

Der `Lax`-Wert lockert diese Einschränkung: Cookies werden in standortübergreifenden Anfragen einbezogen, wenn beide folgende Bedingungen zutreffen:

- Die Anfrage war eine Navigation des obersten Browsing-Kontextes.
- Die Anfrage verwendete eine {{Glossary("Safe/HTTP", "sichere")}} Methode: insbesondere ist {{httpmethod("GET")}} sicher, aber {{httpmethod("POST")}} ist es nicht.

Jedoch bietet `Lax` einen wesentlich schwächeren Schutz als `Strict`:

- Ein Angreifer kann eine Navigation des obersten Levels auslösen. Zum Beispiel zeigen wir zu Beginn dieses Artikels einen CSRF-Angriff, bei dem der Angreifer ein Formular an das Ziel übermittelt: dies wird als oberste Navigation betrachtet. Wenn das Formular mit `GET` übermittelt würde, würde die Anfrage trotzdem Cookies mit `SameSite=Lax` enthalten.
- Selbst wenn der Server überprüft, dass die Anfrage nicht mit `GET` gesendet wurde, unterstützen einige Web-Frameworks "Method Override": Dies ermöglicht es einem Angreifer, eine Anfrage mit `GET` zu senden, sie aber für den Server so erscheinen zu lassen, als ob sie `POST` verwendet hätte.

Als allgemeine Anleitung sollten Sie dann `Strict` für einige Cookies und `Lax` für andere verwenden:

- `Lax` für Cookies, die Sie verwenden, um zu entscheiden, ob einem eingeloggten Benutzer eine Seite angezeigt werden soll.
- `Strict` für Cookies, die Sie für statusändernde Anfragen verwenden werden, die Sie nicht standortübergreifend zulassen möchten.

Ein weiteres Problem mit dem `SameSite`-Attribut ist, dass es Sie vor Anfragen von einer anderen {{Glossary("Site", "Site")}} schützt, nicht von einem anderen {{Glossary("Origin", "Ursprung")}}. Dies ist ein lockerer Schutz, da (zum Beispiel) `https://foo.example.org` und `https://bar.example.org` als dieselbe Site betrachtet werden, obwohl sie unterschiedliche Ursprünge haben. Effektiv müssen Sie, wenn Sie sich auf den gleichen Site-Schutz verlassen, allen Subdomains Ihrer Site vertrauen.

Siehe [Bypassing SameSite cookie restrictions](https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions) für weitere Details zu den Einschränkungen von `SameSite`.

### Verteidigungs-Checkliste

Wir können die oben genannten Abwehrmaßnahmen wie folgt zusammenfassen:

- Verstehen Sie, wo auf Ihrer Website Sie statusändernde Anfragen implementieren, die Session-Cookies verwenden, um zu prüfen, welcher Benutzer die Anfrage gestellt hat.
- Setzen Sie mindestens eine der primären Abwehrmaßnahmen um, die in diesem Dokument beschrieben sind:
  - Wenn Sie `<form>`-Elemente verwenden, um diese Anfragen zu stellen, stellen Sie sicher, dass Sie ein Web-Framework mit Unterstützung für CSRF-Tokens verwenden, und setzen Sie es ein.
  - Wenn Sie JavaScript-APIs wie `fetch()` oder `XMLHttpRequest` verwenden, um statusändernde Anfragen zu stellen, stellen Sie sicher, dass diese keine einfachen Anfragen sind.
  - Welchen Mechanismus Sie auch verwenden, um Anfragen zu stellen, überlegen Sie, Fetch-Metadaten zu verwenden, um standortübergreifende Anfragen zu verbieten.
- Vermeiden Sie die Verwendung der `GET`-Methode, um statusändernde Anfragen zu stellen.
- Setzen Sie das `SameSite`-Attribut für Session-Cookies auf `Strict`, wenn möglich, oder `Lax`, wenn Sie es müssen.

## Siehe auch

- [Cross-Site Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)

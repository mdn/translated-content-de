---
title: Cross-Site Request Forgery (CSRF)
slug: Web/Security/Attacks/CSRF
l10n:
  sourceCommit: 75016e5d37ecff3b11de4c2ef6665178f654797e
---

Bei einem Cross-Site Request Forgery (CSRF)-Angriff täuscht ein Angreifer den Benutzer oder den Browser dazu, eine HTTP-Anfrage an die Zielseite von einer bösartigen Seite aus zu stellen. Die Anfrage enthält die Anmeldedaten des Benutzers und veranlasst den Server, eine schädliche Aktion durchzuführen, da er glaubt, dass der Benutzer diese beabsichtigt hat.

## Übersicht

Eine Website führt typischerweise spezielle Aktionen im Namen eines Benutzers aus – zum Beispiel das Kaufen eines Produkts oder das Vereinbaren eines Termins – indem sie eine HTTP-Anfrage vom Browser des Benutzers empfängt, oft mit Parametern, die die auszuführende Aktion detailliert beschreiben. Um sicherzustellen, dass die Anfrage wirklich vom betreffenden Benutzer stammt, erwartet der Server, dass die Anfrage {{Glossary("Credential", "Anmeldedaten")}} für den Benutzer enthält: zum Beispiel ein Cookie, das die Sitzungs-ID des Benutzers enthält.

Im unten stehenden Beispiel hat sich der Benutzer zuvor in sein Bankkonto eingeloggt, und der Browser hat ein Sitzungs-Cookie für den Benutzer gespeichert. Die Seite enthält ein {{htmlelement("form")}}-Element, das es dem Benutzer ermöglicht, Geld an eine andere Person zu überweisen. Wenn der Benutzer das Formular abschickt, sendet der Browser eine {{httpmethod("POST")}}-Anfrage an den Server, einschließlich der Formulardaten. Wenn der Benutzer angemeldet ist, enthält die Anfrage das Cookie des Benutzers. Der Server validiert das Cookie und führt die spezielle Aktion aus – in diesem Fall die Geldüberweisung:

![Diagramm, das zeigt, wie ein Benutzer ein Browserformular einreicht, der Browser dann eine POST-Anfrage an den Server sendet und der Server die Anfrage validiert.](form-post.svg)

In diesem Leitfaden werden wir eine solche Anfrage, die eine spezielle Aktion ausführt, als _zustandsverändernde Anfrage_ bezeichnen.

Bei einem CSRF-Angriff erstellt der Angreifer eine Website mit einem Formular. Das [`action`-Attribut](/de/docs/Web/HTML/Reference/Elements/form#action) des Formulars ist auf die Website der Bank gesetzt, und das Formular enthält versteckte Eingabefelder, die die Felder der Bank nachahmen:

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

Wenn der Benutzer die Seite besucht, übermittelt der Browser das Formular an die Website der Bank. Da der Benutzer in seinem Bankkonto eingeloggt ist, kann die Anfrage das echte Cookie des Benutzers enthalten, sodass der Server der Bank die Anfrage erfolgreich validiert und die Gelder überträgt:

![Diagramm, das einen CSRF-Angriff zeigt, bei dem eine Scheitelseite eine POST-Anfrage an die Website der Bank des Benutzers übermittelt.](csrf-form-post.svg)

Es gibt weitere Möglichkeiten, wie der Angreifer eine Cross-Site Request Forgery ausführen könnte. Zum Beispiel, wenn die Website eine {{httpmethod("GET")}}-Anfrage zur Ausführung der Aktion verwendet, kann der Angreifer darauf verzichten, ein Formular zu verwenden, und den Benutzer zu einer Seite schicken, die ein Markup wie dieses enthält:

```html
<img
  src="https://my-bank.example.org/transfer?recipient=attacker&amount=1000" />
```

Wenn der Benutzer die Seite lädt, versucht der Browser, die Bildressource abzurufen, die tatsächlich die Transaktionsanfrage ist.

Im Allgemeinen ist ein CSRF-Angriff möglich, wenn Ihre Website:

- HTTP-Anfragen verwendet, um einen Zustand auf dem Server zu ändern.
- Nur Cookies verwendet, um zu überprüfen, dass die Anfrage von einem authentifizierten Benutzer stammt.
- Nur Parameter in der Anfrage verwendet, die ein Angreifer vorhersagen kann.

## Abwehrmaßnahmen gegen CSRF

In diesem Abschnitt werden wir drei alternative Abwehrmaßnahmen gegen CSRF skizzieren und eine vierte Praxis, die zur vertieften Verteidigung neben den anderen genutzt werden kann.

- Die erste primäre Abwehrmaßnahme besteht darin, [CSRF-Token zu verwenden](#csrf-token), die in die Seite eingebettet sind. Dies ist die häufigste Methode, wenn Sie zustandsverändernde Anfragen von Formular-Elementen aus stellen, wie in unserem obigen Beispiel.

- Die zweite Methode ist die Verwendung von [Fetch-Metadaten](#fetch-metadaten) HTTP-Headern, um zu überprüfen, ob die zustandsverändernde Anfrage übergreifend gestellt wird oder nicht.

- Die dritte Methode besteht darin sicherzustellen, dass zustandsverändernde Anfragen [keine einfachen Anfragen](#vermeidung_einfacher_anfragen) sind, sodass Cross-Origin-Anfragen standardmäßig blockiert werden. Diese Methode ist angemessen, wenn Sie zustandsverändernde Anfragen von JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch) aus stellen.

Zum Schluss werden wir [das `SameSite`-Cookie-Attribut](#defense_in_depth_samesite_cookies) diskutieren, das zur vertieften Verteidigung neben einer der vorherigen Methoden verwendet werden kann.

### CSRF-Token

Bei dieser Abwehrmaßnahme bettet der Server beim Bereitstellen einer Seite einen unvorhersehbaren Wert in die Seite ein, den CSRF-Token. Wenn die legitime Seite die zustandsverändernde Anfrage an den Server sendet, wird der CSRF-Token in die HTTP-Anfrage integriert. Der Server kann dann den Token-Wert überprüfen und führt die Anfrage nur aus, wenn sie übereinstimmt. Da ein Angreifer den Token-Wert nicht erraten kann, kann er keine erfolgreiche Fälschung durchführen. Selbst wenn der Angreifer einen Token entdeckt, nachdem er verwendet wurde, kann die Anfrage nicht erneut durchgespielt werden, wenn sich der Token jedes Mal ändert.

Bei Formularübermittlungen wird der CSRF-Token normalerweise in ein verstecktes Formularfeld eingefügt, sodass er bei der Formularübermittlung automatisch an den Server zur Überprüfung zurückgesendet wird.

Für eine JavaScript-API wie `fetch()` könnte der Token in ein Cookie gesetzt oder in die Seite eingebettet werden, und das JavaScript extrahiert den Wert und sendet ihn als zusätzlichen Header.

Moderne Web-Frameworks haben normalerweise eine eingebaute Unterstützung für CSRF-Token: zum Beispiel ermöglicht es [Django](https://www.djangoproject.com/), Formulare mit dem [`csrf_token`](https://docs.djangoproject.com/en/5.1/ref/csrf/) Tag zu schützen. Dies generiert zusätzlich ein verstecktes Formularfeld, das den Token enthält, den das Framework dann auf dem Server überprüft.

Um von diesem Schutz zu profitieren, müssen Sie alle Bereiche Ihrer Website verstehen, in denen Sie zustandsverändernde HTTP-Anfragen stellen, und sicherstellen, dass Sie den Schutz Ihres gewählten Frameworks verwenden.

### Fetch-Metadaten

Fetch-Metadaten sind eine Sammlung von HTTP-Request-Headern, die vom Browser hinzugefügt werden und zusätzliche Informationen über den Kontext einer HTTP-Anfrage liefern. Der Server kann diese Header verwenden, um zu entscheiden, ob er eine Anfrage zulassen oder ablehnen soll.

Am relevantesten für CSRF ist der {{httpheader("Sec-Fetch-Site")}}-Header, der dem Server mitteilt, ob diese Anfrage gleichherkunft, gleichseite, übergreifend oder direkt vom Benutzer initiiert wurde. Der Server kann diese Informationen verwenden, um Cross-Origin-Anfragen zuzulassen oder als potenzielle CSRF-Angriffe zu blockieren.

Zum Beispiel erlaubt dieser [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)-Code nur gleichseitige und gleichherkunft Anfragen:

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

Siehe {{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Request-Header")}} für die vollständige Liste der Fetch-Metadaten-Header und [Fetch-Metadaten](/de/docs/Web/HTTP/Guides/Fetch_metadata) für einen Leitfaden zur Nutzung dieser Funktion.

### Vermeidung einfacher Anfragen

Web-Browser unterscheiden zwischen zwei Arten von HTTP-Anfragen: [_einfache_ Anfragen](/de/docs/Web/HTTP/Guides/CORS#simple_requests) und andere Anfragen.

Einfache Anfragen, die sich aus der Einreichung eines `<form>`-Elements ergeben, können übergreifend gestellt werden, ohne blockiert zu werden. Da Formulare seit den frühen Tagen des Webs in der Lage sind, Cross-Origin-Anfragen zu stellen, ist es wichtig, dass sie aus Kompatibilitätsgründen weiterhin in der Lage sein sollten, Cross-Origin-Anfragen zu stellen. Aus diesem Grund müssen wir andere Strategien implementieren, um Formulare gegen CSRF zu schützen, wie z.B. die Verwendung eines CSRF-Tokens.

Andere Teile der Webplattform, insbesondere JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch), können jedoch andere Arten von Anfragen stellen (zum Beispiel Anfragen, die benutzerdefinierte Header setzen), und diese Anfragen sind standardmäßig nicht übergreifend zugelassen, sodass ein CSRF-Angriff nicht erfolgreich wäre.

Eine Website, die `fetch()` oder `XMLHttpRequest` verwendet, kann sich gegen CSRF verteidigen, indem sie sicherstellt, dass die von ihr gestellten zustandsverändernden Anfragen niemals einfache Anfragen sind.

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

Ebenso verhindert das Setzen eines benutzerdefinierten Headers auf der Anfrage, dass sie als einfache Anfrage behandelt wird:

```js
fetch("https://my-bank.example.org/transfer", {
  method: "POST",
  headers: {
    "X-MY-BANK-ANTI-CSRF": 1,
  },
  body: JSON.stringify({ recipient: "joe", amount: "100" }),
});
```

Der Header-Name kann beliebig sein, solange er nicht mit Standard-Headern kollidiert.

Der Server kann dann die Existenz des Headers überprüfen: Wenn er vorhanden ist, weiß der Server, dass die Anfrage nicht als einfache Anfrage behandelt wurde.

#### Nicht-einfache Anfragen und CORS

Wir haben gesagt, dass nicht-einfache Anfragen _standardmäßig_ nicht übergreifend gesendet werden. Der Haken ist, dass das [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)-Protokoll es einer Website ermöglicht, diese Einschränkung zu lockern.

Konkret ist Ihre Website anfällig für einen CSRF-Angriff von einem bestimmten Ursprung, wenn ihre Antwort auf eine zustandsverändernde Anfrage Folgendes enthält:

- Den {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader, und der Header listet den Ursprung des Senders auf
- Den {{httpheader("Access-Control-Allow-Credentials")}}-Antwortheader.

### Vertiefte Verteidigung: SameSite-Cookies

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Cookie-Attribut bietet einen gewissen Schutz gegen CSRF-Angriffe. Es ist keine vollständige Verteidigung und wird am besten als Ergänzung zu einer der anderen Verteidigungen betrachtet, die eine gewisse vertiefte Verteidigung bieten.

Dieses Attribut steuert, wann ein Browser das Cookie in einer übergreifenden Anfrage einfügen darf. Es hat drei mögliche Werte: `None`, `Lax` und `Strict`.

Der `Strict`-Wert bietet den größten Schutz: Wenn dieses Attribut gesetzt ist, wird der Browser das Cookie nicht in eine übergreifende Anfrage einfügen. Dies schafft jedoch ein Usability-Problem: Wenn der Benutzer in Ihr System eingeloggt ist und einem Link zu Ihrer Seite von einer anderen Seite folgt, dann werden Ihre Cookies nicht einbezogen und der Benutzer wird nicht erkannt, wenn er Ihre Seite erreicht.

Der `Lax`-Wert lockert diese Einschränkung: Cookies werden in übergreifenden Anfragen einbezogen, wenn beide der folgenden Bedingungen zutreffen:

- Die Anfrage war eine Navigation des Top-Level-Browsing-Kontextes.
- Die Anfrage verwendete eine {{Glossary("Safe/HTTP", "sichere")}} Methode: notably, {{httpmethod("GET")}} ist sicher, aber {{httpmethod("POST")}} ist nicht.

Jedoch bietet `Lax` einen deutlich schwächeren Schutz als `Strict`:

- Ein Angreifer kann eine Top-Level-Navigation initiieren. Zum Beispiel zeigen wir am Anfang dieses Artikels einen CSRF-Angriff, bei dem der Angreifer ein Formular an das Ziel sendet: dies wird als Top-Level-Navigation betrachtet. Wenn das Formular mit `GET` eingereicht wird, dann würde die Anfrage immer noch Cookies mit `SameSite=Lax` enthalten.
- Auch wenn der Server überprüft, dass die Anfrage nicht mit `GET` gesendet wurde, unterstützen einige Web-Frameworks eine "Methodenüberschreibung": das ermöglicht einem Angreifer, eine Anfrage mit `GET` zu senden, die dem Server jedoch erscheint, als ob sie mit `POST` gesendet wurde.

Als allgemeiner Leitfaden sollten Sie dann versuchen, `Strict` für einige Cookies und `Lax` für andere zu verwenden:

- `Lax` für Cookies, die Sie verwenden, um zu entscheiden, ob einem eingeloggten Benutzer eine Seite gezeigt werden soll
- `Strict` für Cookies, die Sie für zustandsverändernde Anfragen verwenden, die Sie nicht übergreifend zulassen möchten.

Ein weiteres Problem mit dem `SameSite`-Attribut ist, dass es Sie vor Anfragen von einer anderen {{Glossary("Site", "Website")}} und nicht von einem anderen {{Glossary("Origin", "Ursprung")}} schützt. Dies ist ein lockererer Schutz, weil (zum Beispiel) `https://foo.example.org` und `https://bar.example.org` als gleiche Website betrachtet werden, obwohl sie unterschiedliche Ursprünge sind. Im Wesentlichen müssen Sie, wenn Sie sich auf den gesameite Schutz verlassen, alle Subdomains Ihrer Seite vertrauen.

Siehe [Bypassing SameSite cookie restrictions](https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions) für weitere Details zu den Einschränkungen von `SameSite`.

## Zusammenfassung der Abwehrmaßnahmen

- Verstehen Sie, wo Sie auf Ihrer Website zustandsverändernde Anfragen implementieren, die Sitzungscookies verwenden, um zu überprüfen, welcher Benutzer die Anfrage gestellt hat.
- Implementieren Sie mindestens eine der primären Abwehrmaßnahmen, die in diesem Dokument beschrieben werden:
  - Wenn Sie `<form>`-Elemente verwenden, um diese Anfragen zu stellen, stellen Sie sicher, dass Sie ein Web-Framework mit Unterstützung für CSRF-Token verwenden, und verwenden Sie es.
  - Wenn Sie JavaScript-APIs wie `fetch()` oder `XMLHttpRequest` verwenden, um zustandsverändernde Anfragen zu stellen, stellen Sie sicher, dass es sich nicht um einfache Anfragen handelt.
  - Unabhängig davon, welchen Mechanismus Sie zur Übermittlung der Anfragen verwenden, sollten Sie Fetch-Metadaten in Betracht ziehen, um übergreifende Anfragen zu verbieten.
- Vermeiden Sie es, die `GET`-Methode zu verwenden, um zustandsverändernde Anfragen zu stellen.
- Setzen Sie das `SameSite`-Attribut für Sitzungscookies auf `Strict`, wenn möglich, oder auf `Lax`, wenn es notwendig ist.

## Siehe auch

- [Lokaler Netzwerkzugang](/de/docs/Web/Security/Defenses/Local_network_access)
- [Cross-Site Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) auf [owasp.org](https://owasp.org/)

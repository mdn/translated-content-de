---
title: Cross-Site-Request-Forgery (CSRF)
slug: Web/Security/Attacks/CSRF
l10n:
  sourceCommit: 81bf621759d3a52fdf737c2d75f186a0073d1406
---

Bei einem Cross-Site-Request-Forgery (CSRF)-Angriff täuscht ein Angreifer den Benutzer oder den Browser dazu, eine HTTP-Anfrage an die Zielseite von einer bösartigen Seite auszustellen. Die Anfrage enthält die Anmeldeinformationen des Benutzers und veranlasst den Server, eine schädliche Aktion durchzuführen, da er denkt, dass der Benutzer diese beabsichtigt hat.

## Übersicht

Eine Website führt normalerweise spezielle Aktionen im Namen eines Benutzers aus - wie etwa den Kauf eines Produkts oder die Terminvergabe -, indem sie eine HTTP-Anfrage vom Browser des Benutzers erhält, oft mit Parametern, die die auszuführende Aktion detaillieren. Um sicherzustellen, dass die Anfrage wirklich vom betreffenden Benutzer stammt, erwartet der Server, dass die Anfrage {{Glossary("Credential", "Anmeldeinformationen")}} für den Benutzer enthält, z. B. ein Cookie mit der Sitzungs-ID des Benutzers.

Im untenstehenden Beispiel hat sich der Benutzer zuvor bei seiner Bank angemeldet, und der Browser hat ein Sitzungscookie für den Benutzer gespeichert. Die Seite enthält ein {{htmlelement("form")}}-Element, das es dem Benutzer ermöglicht, Geld an eine andere Person zu überweisen. Wenn der Benutzer das Formular absendet, sendet der Browser eine {{httpmethod("POST")}}-Anfrage an den Server, einschließlich der Formulardaten. Wenn der Benutzer angemeldet ist, enthält die Anfrage das Cookie des Benutzers. Der Server überprüft das Cookie und führt die spezielle Aktion durch - in diesem Fall die Überweisung von Geld:

![Diagramm zeigt ein Formular, das vom Benutzer über den Browser gesendet wird, der Browser sendet dann eine POST-Anfrage an den Server, und der Server validiert die Anfrage.](form-post.svg)

In diesem Leitfaden nennen wir eine Anfrage wie diese, die eine spezielle Aktion ausführt, eine _zustandsändernde Anfrage_.

Bei einem CSRF-Angriff erstellt der Angreifer eine Website, die ein Formular enthält. Das [`action`-Attribut](/de/docs/Web/HTML/Reference/Elements/form#action) des Formulars ist auf die Website der Bank gesetzt, und das Formular enthält versteckte Eingabefelder, die die Felder der Bank nachahmen:

```html
<form action="https://my-bank.example.org/transfer" method="POST">
  <input type="hidden" name="recipient" value="attacker" />
  <input type="hidden" name="amount" value="1000" />
</form>
```

Die Seite enthält zudem JavaScript, das das Formular beim Laden der Seite absendet:

```js
const form = document.querySelector("form");
form.submit();
```

Wenn der Benutzer die Seite besucht, sendet der Browser das Formular an die Website der Bank. Da der Benutzer bei seiner Bank angemeldet ist, kann die Anfrage das echte Cookie des Benutzers enthalten, wodurch der Server der Bank die Anfrage erfolgreich validiert und die Gelder überweist:

![Diagramm zeigt einen CSRF-Angriff, bei dem eine Tarnseite eine POST-Anfrage an die Website der Bank des Benutzers sendet.](csrf-form-post.svg)

Es gibt andere Möglichkeiten, wie der Angreifer einen Cross-Site-Request-Forgery durchführen könnte. Wenn die Website zum Beispiel eine {{httpmethod("GET")}}-Anfrage verwendet, um die Aktion auszuführen, kann der Angreifer das Formular ganz vermeiden und den Angriff auslösen, indem er dem Benutzer einen Link zu einer Seite sendet, die Markup wie dieses enthält:

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

In diesem Abschnitt werden wir drei alternative Abwehrmaßnahmen gegen CSRF und eine vierte Praxis skizzieren, die zur Verteidigung in der Tiefe neben jeder anderen verwendet werden kann.

- Die erste primäre Abwehrmaßnahme besteht darin, [CSRF-Token zu verwenden](#csrf-token), die in die Seite eingebettet sind. Dies ist die gängigste Methode, wenn Sie zustandsändernde Anfragen von Formularelementen aus stellen, wie in unserem obigen Beispiel.

- Die zweite besteht darin, [_Fetch Metadata_ HTTP-Header](#fetch_metadata) zu verwenden, um zu überprüfen, ob die zustandsändernde Anfrage von einer anderen Website als Cross-Site-Anfrage ausgestellt wird.

- Die dritte besteht darin sicherzustellen, dass zustandsändernde Anfragen [keine _einfachen Anfragen_ sind](#vermeidung_einfacher_anfragen), sodass standardmäßig Cross-Origin-Anfragen blockiert werden. Diese Methode ist geeignet, wenn Sie zustandsändernde Anfragen von JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch) aus stellen.

Schließlich werden wir über [das `SameSite`-Cookie-Attribut](#defense_in_depth_samesite_cookies) sprechen, das zur Verteidigung in der Tiefe neben einer der vorherigen Methoden verwendet werden kann.

### CSRF-Token

Bei dieser Abwehrmaßnahme setzt der Server beim Ausliefern einer Seite einen unvorhersehbaren Wert in die Seite ein, den sogenannten CSRF-Token. Wenn die legitime Seite die zustandsändernde Anfrage an den Server sendet, enthält diese den CSRF-Token in der HTTP-Anfrage. Der Server kann dann den Tokenwert überprüfen und die Anfrage nur ausführen, wenn sie übereinstimmt. Da ein Angreifer den Tokenwert nicht erraten kann, kann er keine erfolgreiche Fälschung ausführen. Selbst wenn der Angreifer einen Token entdeckt, nachdem er verwendet wurde, kann die Anfrage nicht wiederholt werden, wenn sich der Token jedes Mal ändert.

Bei Formularübermittlungen wird der CSRF-Token normalerweise in einem versteckten Formularfeld aufgenommen, sodass er bei der Formularübermittlung automatisch an den Server zur Überprüfung gesendet wird.

Bei einer JavaScript-API wie `fetch()` könnte der Token in einem Cookie abgelegt oder in die Seite eingebettet werden, und das JavaScript extrahiert den Wert und sendet ihn als zusätzlichen Header.

Moderne Web-Frameworks enthalten in der Regel eine integrierte Unterstützung für CSRF-Token: Zum Beispiel ermöglicht [Django](https://www.djangoproject.com/) den Schutz von Formularen mithilfe des [`csrf_token`](https://docs.djangoproject.com/en/5.1/ref/csrf/) Tags. Dieser erzeugt ein zusätzliches verborgenes Formularfeld, das den Token enthält, den das Framework dann auf dem Server überprüft.

Um diesen Schutz nutzen zu können, müssen Sie verstehen, an welchen Stellen Ihrer Website Sie zustandsändernde HTTP-Anfragen verwenden und sicherstellen, dass Sie den Schutz durch Ihr gewähltes Framework verwenden.

### Fetch Metadata

Fetch Metadata ist eine Sammlung von HTTP-Anfrage-Headern, die von Browsern hinzugefügt werden und zusätzliche Informationen über den Kontext einer HTTP-Anfrage liefern. Der Server kann diese Header verwenden, um zu entscheiden, ob eine Anfrage zugelassen wird oder nicht.

Am relevantesten für CSRF ist der {{httpheader("Sec-Fetch-Site")}}-Header, der dem Server mitteilt, ob diese Anfrage von derselben Origin, derselben Site, als Cross-Site oder direkt vom Benutzer initiiert wurde. Der Server kann diese Informationen verwenden, um Cross-Origin-Anfragen zu erlauben oder sie als potenzielle CSRF-Angriffe zu blockieren.

Zum Beispiel erlaubt dieser [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)-Code nur Anfragen von derselben Site und derselben Origin:

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

Siehe {{Glossary("Fetch_metadata_request_header", "Fetch Metadata Request Header")}} für die vollständige Liste der Fetch Metadata-Header und [Fetch Metadata](/de/docs/Web/HTTP/Guides/Fetch_metadata) für einen Leitfaden zur Nutzung dieser Funktion.

### Vermeidung einfacher Anfragen

Webbrowser unterscheiden zwei Arten von HTTP-Anfragen: [_einfache_ Anfragen](/de/docs/Web/HTTP/Guides/CORS#simple_requests) und andere Anfragen.

Einfache Anfragen, die die Art von Anfrage sind, die aus einem `<form>`-Element resultieren, können ohne Blockierung Cross-Origin ausgeführt werden. Da Formulare seit den frühen Tagen des Webs Cross-Origin-Anfragen machen konnten, ist es für die Kompatibilität wichtig, dass sie weiterhin Cross-Origin-Anfragen machen können. Deshalb müssen wir andere Strategien umsetzen, um Formulare gegen CSRF zu verteidigen, wie die Verwendung eines CSRF-Tokens.

Andere Teile der Webplattform, insbesondere JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch), können verschiedene Arten von Anfragen machen (zum Beispiel Anfragen, die benutzerdefinierte Header setzen), und diese Anfragen sind standardmäßig keine Cross-Origin-Anfragen, sodass ein CSRF-Angriff nicht erfolgreich wäre.

Eine Website, die `fetch()` oder `XMLHttpRequest` verwendet, kann sich gegen CSRF wehren, indem sichergestellt wird, dass die von ihr ausgegebenen zustandsändernden Anfragen niemals einfache Anfragen sind.

Zum Beispiel wird das Setzen des {{httpheader("Content-Type")}} der Anfrage auf `"application/json"` verhindern, dass sie als einfache Anfrage betrachtet wird:

```js
fetch("https://my-bank.example.org/transfer", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ recipient: "joe", amount: "100" }),
});
```

Ähnlich verhält es sich beim Setzen eines benutzerdefinierten Headers auf der Anfrage, das verhindern wird, dass sie als einfache Anfrage betrachtet wird:

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

Der Server kann dann auf das Vorhandensein des Headers prüfen: Wenn er existiert, weiß der Server, dass die Anfrage nicht als einfache Anfrage behandelt wurde.

#### Nicht-einfache Anfragen und CORS

Wir haben gesagt, dass nicht-einfache Anfragen standardmäßig nicht Cross-Origin versendet werden. Der Haken ist, dass das [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)-Protokoll ermöglicht, diese Beschränkung zu lockern.

Insbesondere ist Ihre Website für einen CSRF-Angriff von einem bestimmten Ursprung anfällig, wenn ihre Antwort auf eine zustandsändernde Anfrage Folgendes umfasst:

- Der {{httpheader("Access-Control-Allow-Origin")}}-Antwort-Header, und der Header listet den Ursprung des Absenders auf.
- Der {{httpheader("Access-Control-Allow-Credentials")}}-Antwort-Header.

### Defense in Depth: SameSite-Cookies

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Cookie-Attribut bietet einen gewissen Schutz vor CSRF-Angriffen. Es ist kein vollständiger Schutz und sollte als Ergänzung zu einer der anderen Verteidigungen angesehen werden, die eine gewisse Tiefe bieten.

Dieses Attribut steuert, wann ein Browser das Cookie in einer Cross-Site-Anfrage einfügen darf. Es hat drei mögliche Werte: `None`, `Lax` und `Strict`.

Der `Strict`-Wert bietet den meisten Schutz: Wenn dieses Attribut gesetzt ist, wird der Browser das Cookie in keiner Cross-Site-Anfrage einfügen. Dies führt jedoch zu einem Usability-Problem: Wenn der Benutzer auf Ihrer Seite angemeldet ist und von einer anderen Seite auf Ihre Seite verlinkt, werden Ihre Cookies nicht eingefügt, und der Benutzer wird nicht erkannt, wenn er Ihre Seite erreicht.

Der `Lax`-Wert lockert diese Einschränkung: Cookies werden in Cross-Site-Anfragen eingefügt, wenn beide der folgenden Bedingungen zutreffen:

- Die Anfrage war eine Navigation des Top-Level-Browsing-Kontexts.
- Die Anfrage verwendete eine {{Glossary("Safe/HTTP", "sichere")}} Methode: insbesondere {{httpmethod("GET")}} ist sicher, aber {{httpmethod("POST")}} ist es nicht.

Jedoch bietet `Lax` einen deutlich schwächeren Schutz als `Strict`:

- Ein Angreifer kann eine Top-Level-Navigation auslösen. Zum Beispiel zeigen wir am Anfang dieses Artikels einen CSRF-Angriff, bei dem der Angreifer ein Formular an das Ziel sendet: Dies wird als Top-Level-Navigation betrachtet. Wenn das Formular mit `GET` gesendet würde, würde die Anfrage immer noch Cookies mit `SameSite=Lax` enthalten.
- Selbst wenn der Server überprüft, dass die Anfrage nicht mit `GET` gesendet wurde, unterstützen einige Web-Frameworks "Methodenüberschreibungen": Dies ermöglicht es einem Angreifer, eine Anfrage mit `GET` zu senden, sie jedoch so erscheinen zu lassen, als hätte sie `POST` verwendet.

Als allgemeiner Leitfaden sollten Sie dann versuchen, `Strict` für einige Cookies und `Lax` für andere zu verwenden:

- `Lax` für Cookies, die Sie verwenden, um zu entscheiden, ob ein angemeldeter Benutzer eine Seite angezeigt bekommen soll.
- `Strict` für Cookies, die Sie für zustandsändernde Anfragen verwenden, die Sie nicht Cross-Site zulassen möchten.

Ein weiteres Problem mit dem `SameSite`-Attribut ist, dass es Sie vor Anfragen von einer anderen {{Glossary("Site", "Site")}} schützt, nicht von einem anderen {{Glossary("Origin", "Ursprung")}}. Dies ist ein lockererer Schutz, da (zum Beispiel) `https://foo.example.org` und `https://bar.example.org` als dieselbe Site betrachtet werden, obwohl sie verschiedene Ursprünge sind. Effektiv, wenn Sie sich auf einen Schutz gegen dieselbe Site verlassen, müssen Sie allen Subdomains Ihrer Site vertrauen.

Siehe [Umgehung von SameSite-Cookie-Beschränkungen](https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions) für weitere Informationen zu den Einschränkungen von `SameSite`.

## Zusammenfassung der Verteidigungscheckliste

- Verstehen Sie, an welchen Stellen Ihrer Website Sie zustandsändernde Anfragen verwenden, die Sitzungs-Cookies verwenden, um zu überprüfen, welcher Benutzer die Anfrage gestellt hat.
- Implementieren Sie mindestens eine der primären Verteidigungen, die in diesem Dokument beschrieben sind:
  - Wenn Sie `<form>`-Elemente verwenden, um diese Anfragen zu stellen, stellen Sie sicher, dass Sie ein Web-Framework mit Unterstützung für CSRF-Token verwenden, und nutzen Sie es.
  - Wenn Sie JavaScript-APIs wie `fetch()` oder `XMLHttpRequest` verwenden, um zustandsändernde Anfragen zu stellen, stellen Sie sicher, dass sie keine einfachen Anfragen sind.
  - Welchen Mechanismus Sie auch verwenden, um Anfragen zu stellen, erwägen Sie die Verwendung von Fetch Metadata, um Cross-Site-Anfragen zu verhindern.
- Vermeiden Sie es, die `GET`-Methode zu verwenden, um zustandsändernde Anfragen zu stellen.
- Setzen Sie das `SameSite`-Attribut für Sitzungscookies auf `Strict`, wenn möglich, oder `Lax`, wenn nötig.

## Siehe auch

- [Cross-Site Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) auf [owasp.org](https://owasp.org/)

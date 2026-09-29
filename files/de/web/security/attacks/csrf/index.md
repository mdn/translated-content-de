---
title: Cross-Site Request Forgery (CSRF)
slug: Web/Security/Attacks/CSRF
l10n:
  sourceCommit: dd70ed064388b0fac4338321f727c8840a508b64
---

Bei einem Cross-Site-Request-Forgery-Angriff (CSRF) bringt ein Angreifer den Benutzer oder den Browser dazu, von einer bösartigen Website aus eine HTTP-Anfrage an die Zielwebsite zu senden. Die Anfrage enthält die Zugangsdaten des Benutzers und veranlasst den Server zu einer schädlichen Aktion, weil er annimmt, der Benutzer habe sie beabsichtigt.

## Überblick

Eine Website führt besondere Aktionen im Namen eines Benutzers aus – etwa den Kauf eines Produkts oder die Vereinbarung eines Termins –, indem sie eine HTTP-Anfrage vom Browser des Benutzers empfängt. Häufig enthält die Anfrage Parameter, die die auszuführende Aktion beschreiben. Um sicherzustellen, dass die Anfrage tatsächlich vom betreffenden Benutzer stammt, erwartet der Server, dass sie dessen {{Glossary("Credential", "Zugangsdaten")}} enthält, beispielsweise ein Cookie mit der Sitzungs-ID des Benutzers.

Im folgenden Beispiel hat sich der Benutzer zuvor bei seiner Bank angemeldet, und der Browser hat ein Sitzungscookie für ihn gespeichert. Die Seite enthält ein {{htmlelement("form")}}-Element, mit dem der Benutzer Geld an eine andere Person überweisen kann. Wenn der Benutzer das Formular absendet, sendet der Browser eine {{httpmethod("POST")}}-Anfrage mit den Formulardaten an den Server. Ist der Benutzer angemeldet, enthält die Anfrage sein Cookie. Der Server prüft das Cookie und führt die Aktion aus – in diesem Fall die Überweisung:

![Diagramm: Ein Benutzer sendet ein Browserformular ab. Daraufhin sendet der Browser eine POST-Anfrage an den Server, der die Anfrage prüft.](form-post.svg)

In diesem Leitfaden bezeichnen wir eine solche Anfrage, die eine besondere Aktion ausführt, als _zustandsändernde Anfrage_.

Bei einem CSRF-Angriff erstellt der Angreifer eine Website mit einem Formular. Dessen [`action`-Attribut](/de/docs/Web/HTML/Reference/Elements/form#action) verweist auf die Website der Bank. Das Formular enthält versteckte Eingabefelder, die die Felder der Bank nachahmen:

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

Wenn der Benutzer die Seite besucht, sendet der Browser das Formular an die Website der Bank. Da der Benutzer bei seiner Bank angemeldet ist, kann die Anfrage sein echtes Cookie enthalten. Der Server der Bank prüft die Anfrage daher erfolgreich und überweist das Geld:

![Diagramm: Bei einem CSRF-Angriff sendet eine vorgetäuschte Seite eine POST-Anfrage an die Website der Bank des Benutzers.](csrf-form-post.svg)

Ein Angreifer kann eine Cross-Site-Request-Forgery auch auf andere Weise auslösen. Wenn die Website beispielsweise eine {{httpmethod("GET")}}-Anfrage verwendet, um die Aktion auszuführen, benötigt der Angreifer kein Formular. Er kann den Angriff ausführen, indem er dem Benutzer einen Link zu einer Seite mit folgendem Markup sendet:

```html
<img
  src="https://my-bank.example.org/transfer?recipient=attacker&amount=1000" />
```

Wenn der Benutzer die Seite lädt, versucht der Browser, die Bildressource abzurufen. Tatsächlich handelt es sich dabei um die Transaktionsanfrage.

Allgemein ist ein CSRF-Angriff möglich, wenn Ihre Website:

- HTTP-Anfragen verwendet, um einen Zustand auf dem Server zu ändern.
- ausschließlich Cookies verwendet, um zu prüfen, ob die Anfrage von einem authentifizierten Benutzer stammt.
- ausschließlich Anfrageparameter verwendet, die ein Angreifer vorhersagen kann.

## Schutzmaßnahmen gegen CSRF

In diesem Abschnitt stellen wir drei alternative Schutzmaßnahmen gegen CSRF sowie eine vierte Maßnahme vor, die jede der anderen durch zusätzliche Absicherung ergänzen kann.

- Die erste primäre Schutzmaßnahme besteht darin, [_CSRF-Token_](#csrf-token) in die Seite einzubetten. Dies ist die gängigste Methode, wenn zustandsändernde Anfragen wie im obigen Beispiel über Formularelemente gesendet werden.

- Die zweite besteht darin, anhand von [_Fetch-Metadaten_](#fetch-metadaten) in HTTP-Headern zu prüfen, ob eine zustandsändernde Anfrage websiteübergreifend gesendet wird.

- Die dritte besteht darin, sicherzustellen, dass zustandsändernde Anfragen [keine _einfachen Anfragen_](#einfache_anfragen_vermeiden) sind, sodass ursprungsübergreifende Anfragen standardmäßig blockiert werden. Diese Methode eignet sich, wenn Sie zustandsändernde Anfragen über JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch) senden.

Abschließend behandeln wir das [`SameSite`-Cookie-Attribut](#defense_in_depth_samesite_cookies), das jede der vorherigen Methoden durch zusätzliche Absicherung ergänzen kann.

### CSRF-Token

Bei dieser Schutzmaßnahme bettet der Server beim Ausliefern einer Seite einen nicht vorhersagbaren Wert in sie ein: das CSRF-Token. Wenn die legitime Seite anschließend eine zustandsändernde Anfrage an den Server sendet, fügt sie das CSRF-Token in die HTTP-Anfrage ein. Der Server kann den Wert des Tokens prüfen und die Anfrage nur ausführen, wenn er übereinstimmt. Da ein Angreifer den Tokenwert nicht erraten kann, kann er keine erfolgreiche gefälschte Anfrage senden. Selbst wenn er ein Token nach dessen Verwendung erfährt, kann die Anfrage nicht erneut gesendet werden, sofern das Token jedes Mal geändert wird.

Bei Formularübermittlungen wird das CSRF-Token üblicherweise in ein verstecktes Formularfeld eingefügt. So wird es beim Absenden des Formulars automatisch zur Prüfung an den Server zurückgesendet.

Bei einer JavaScript-API wie `fetch()` kann das Token in einem Cookie oder in der Seite hinterlegt werden. JavaScript liest den Wert aus und sendet ihn als zusätzlichen Header.

Moderne Webframeworks unterstützen CSRF-Token in der Regel direkt. Mit [Django](https://www.djangoproject.com/) können Sie Formulare beispielsweise durch das Tag [`csrf_token`](https://docs.djangoproject.com/en/stable/ref/csrf/) schützen. Es erzeugt ein zusätzliches verstecktes Formularfeld mit dem Token, das das Framework anschließend auf dem Server prüft.

Um diesen Schutz zu nutzen, müssen Sie wissen, an welchen Stellen Ihrer Website zustandsändernde HTTP-Anfragen verwendet werden, und sicherstellen, dass Sie dort die Schutzmaßnahme Ihres Frameworks einsetzen.

### Fetch-Metadaten

Fetch-Metadaten sind eine Gruppe von HTTP-Anfrageheadern, die der Browser hinzufügt und die zusätzliche Informationen zum Kontext einer HTTP-Anfrage liefern. Anhand dieser Header kann der Server entscheiden, ob er eine Anfrage zulässt.

Für CSRF ist vor allem der Header {{httpheader("Sec-Fetch-Site")}} relevant. Er teilt dem Server mit, ob die Anfrage vom selben Ursprung, von derselben Website oder websiteübergreifend stammt oder direkt vom Benutzer ausgelöst wurde. Anhand dieser Information kann der Server ursprungsübergreifende Anfragen zulassen oder als mögliche CSRF-Angriffe blockieren.

Der folgende [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)-Code lässt beispielsweise nur Anfragen von derselben Website und demselben Ursprung zu:

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

Eine vollständige Liste der Fetch-Metadaten-Header finden Sie unter {{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anfrageheader")}}. Der [Leitfaden zu Fetch-Metadaten](/de/docs/Web/HTTP/Guides/Fetch_metadata) erläutert die Verwendung dieser Funktion.

### Einfache Anfragen vermeiden

Webbrowser unterscheiden zwei Arten von HTTP-Anfragen: [_einfache_ Anfragen](/de/docs/Web/HTTP/Guides/CORS#simple_requests) und andere Anfragen.

Einfache Anfragen, wie sie beim Absenden eines `<form>`-Elements entstehen, können ursprungsübergreifend gesendet werden, ohne blockiert zu werden. Formulare konnten schon seit den Anfängen des Webs ursprungsübergreifende Anfragen senden. Aus Kompatibilitätsgründen ist es wichtig, dass dies weiterhin möglich ist. Deshalb benötigen wir andere Strategien, um Formulare vor CSRF zu schützen, etwa CSRF-Token.

Andere Teile der Webplattform, insbesondere JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch), können jedoch andere Arten von Anfragen senden, beispielsweise Anfragen mit benutzerdefinierten Headern. Solche Anfragen sind ursprungsübergreifend standardmäßig nicht zulässig, sodass ein CSRF-Angriff damit nicht erfolgreich wäre.

Eine Website, die `fetch()` oder `XMLHttpRequest` verwendet, kann sich daher gegen CSRF schützen, indem sie sicherstellt, dass ihre zustandsändernden Anfragen niemals einfache Anfragen sind.

Wenn Sie beispielsweise den {{httpheader("Content-Type")}} der Anfrage auf `"application/json"` setzen, wird sie nicht als einfache Anfrage behandelt:

```js
fetch("https://my-bank.example.org/transfer", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ recipient: "joe", amount: "100" }),
});
```

Ebenso verhindert ein benutzerdefinierter Anfrageheader, dass die Anfrage als einfache Anfrage behandelt wird:

```js
fetch("https://my-bank.example.org/transfer", {
  method: "POST",
  headers: {
    "X-MY-BANK-ANTI-CSRF": 1,
  },
  body: JSON.stringify({ recipient: "joe", amount: "100" }),
});
```

Der Headername ist frei wählbar, solange er nicht mit Standardheadern kollidiert.

Der Server kann anschließend prüfen, ob der Header vorhanden ist. Ist dies der Fall, weiß der Server, dass die Anfrage nicht als einfache Anfrage behandelt wurde.

#### Nicht einfache Anfragen und CORS

Wie bereits erwähnt, werden nicht einfache Anfragen _standardmäßig_ nicht ursprungsübergreifend gesendet. Allerdings kann eine Website diese Einschränkung mithilfe des Protokolls [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) lockern.

Ihre Website ist insbesondere dann für einen CSRF-Angriff von einem bestimmten Ursprung aus anfällig, wenn ihre Antwort auf eine zustandsändernde Anfrage Folgendes enthält:

- den Antwortheader {{httpheader("Access-Control-Allow-Origin")}}, der den Ursprung des Absenders aufführt.
- den Antwortheader {{httpheader("Access-Control-Allow-Credentials")}}.

### Zusätzliche Absicherung: SameSite-Cookies

Das Cookie-Attribut [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) bietet einen gewissen Schutz vor CSRF-Angriffen. Es stellt allein jedoch keinen vollständigen Schutz dar und sollte als Ergänzung zu einer der anderen Schutzmaßnahmen betrachtet werden.

Dieses Attribut steuert, wann ein Browser das Cookie in eine websiteübergreifende Anfrage aufnehmen darf. Es kann die Werte `None`, `Lax` und `Strict` haben.

Der Wert `Strict` bietet den stärksten Schutz: Ist er gesetzt, fügt der Browser das Cookie keiner websiteübergreifenden Anfrage hinzu. Dies beeinträchtigt jedoch die Benutzerfreundlichkeit: Wenn ein angemeldeter Benutzer einem Link von einer anderen Website zu Ihrer Website folgt, werden Ihre Cookies nicht mitgesendet. Der Benutzer wird beim Aufrufen Ihrer Website daher nicht erkannt.

Der Wert `Lax` lockert diese Einschränkung: Cookies werden bei websiteübergreifenden Anfragen mitgesendet, wenn beide folgenden Bedingungen erfüllt sind:

- Die Anfrage wurde durch eine Navigation des obersten Browsing-Kontexts ausgelöst.
- Die Anfrage verwendete eine {{Glossary("Safe/HTTP", "sichere")}} Methode: Insbesondere ist {{httpmethod("GET")}} sicher, {{httpmethod("POST")}} dagegen nicht.

Allerdings bietet `Lax` einen deutlich schwächeren Schutz als `Strict`:

- Ein Angreifer kann eine Navigation auf oberster Ebene auslösen. Zu Beginn dieses Artikels zeigen wir beispielsweise einen CSRF-Angriff, bei dem der Angreifer ein Formular an die Zielwebsite absendet. Das gilt als Navigation auf oberster Ebene. Würde das Formular mit `GET` abgesendet, enthielte die Anfrage auch Cookies mit `SameSite=Lax`.
- Selbst wenn der Server prüft, dass die Anfrage nicht mit `GET` gesendet wurde, unterstützen einige Webframeworks „Method Override“. Dadurch kann ein Angreifer eine Anfrage mit `GET` senden, die für den Server so aussieht, als würde sie `POST` verwenden.

Als allgemeine Richtlinie sollten Sie daher für einige Cookies `Strict` und für andere `Lax` verwenden:

- `Lax` für Cookies, anhand derer Sie entscheiden, ob einem angemeldeten Benutzer eine Seite angezeigt werden soll.
- `Strict` für Cookies, die Sie für zustandsändernde Anfragen verwenden, die Sie nicht websiteübergreifend zulassen möchten.

Ein weiteres Problem des Attributs `SameSite` besteht darin, dass es vor Anfragen von einer anderen {{Glossary("Site", "Website")}} schützt, nicht aber vor Anfragen von einem anderen {{Glossary("Origin", "Ursprung")}}. Dieser Schutz ist weniger streng: Beispielsweise gelten `https://foo.example.org` und `https://bar.example.org` als dieselbe Website, obwohl sie unterschiedliche Ursprünge sind. Wenn Sie sich auf den Schutz für Anfragen von derselben Website verlassen, müssen Sie somit allen Subdomains Ihrer Website vertrauen.

Weitere Einzelheiten zu den Grenzen von `SameSite` finden Sie unter [SameSite-Cookie-Einschränkungen umgehen](https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions).

## Checkliste der Schutzmaßnahmen

- Ermitteln Sie, an welchen Stellen Ihrer Website zustandsändernde Anfragen verwendet werden, bei denen Sitzungscookies dazu dienen, den anfragenden Benutzer zu identifizieren.
- Implementieren Sie mindestens eine der in diesem Dokument beschriebenen primären Schutzmaßnahmen:
  - Wenn Sie solche Anfragen mit `<form>`-Elementen senden, verwenden Sie ein Webframework, das CSRF-Token unterstützt, und nutzen Sie diese Unterstützung.
  - Wenn Sie zustandsändernde Anfragen über JavaScript-APIs wie `fetch()` oder `XMLHttpRequest` senden, stellen Sie sicher, dass es sich nicht um einfache Anfragen handelt.
  - Unabhängig davon, wie Sie die Anfragen senden, sollten Sie erwägen, websiteübergreifende Anfragen anhand von Fetch-Metadaten abzulehnen.
- Verwenden Sie die Methode `GET` nicht für zustandsändernde Anfragen.
- Setzen Sie das Attribut `SameSite` für Sitzungscookies nach Möglichkeit auf `Strict`, andernfalls auf `Lax`.

## Siehe auch

- [Zugriff auf das lokale Netzwerk](/de/docs/Web/Security/Defenses/Local_network_access)
- [Spickzettel zur Verhinderung von Cross-Site Request Forgery](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) auf [owasp.org](https://owasp.org/)

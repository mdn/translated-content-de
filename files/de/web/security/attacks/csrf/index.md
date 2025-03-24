---
title: Cross-Site-Request-Forgery (CSRF)
slug: Web/Security/Attacks/CSRF
l10n:
  sourceCommit: c4c42a1573a65a808f085999a4d8d97199e142d1
---

Bei einem Cross-Site-Request-Forgery (CSRF)-Angriff bringt ein Angreifer den Benutzer oder den Browser dazu, eine HTTP-Anfrage von einer bösartigen Website an die Zielseite zu senden. Die Anfrage enthält die Anmeldedaten des Benutzers und veranlasst den Server, eine schädliche Aktion auszuführen, da er denkt, dass der Benutzer dies beabsichtigt hat.

## Überblick

Eine Website führt in der Regel spezielle Aktionen im Auftrag eines Benutzers aus – zum Beispiel den Kauf eines Produkts oder das Vereinbaren eines Termins – indem sie eine HTTP-Anfrage vom Browser des Benutzers empfängt, oft mit Parametern, die die auszuführende Aktion detaillieren. Um sicherzustellen, dass die Anfrage wirklich vom betreffenden Benutzer stammt, erwartet der Server, dass die Anfrage {{Glossary("Credential", "Anmeldedaten")}} für den Benutzer enthält, zum Beispiel ein Cookie mit der Sitzungs-ID des Benutzers.

Im untenstehenden Beispiel hat sich der Benutzer zuvor bei seiner Bank angemeldet, und der Browser hat für diesen Benutzer ein Sitzungs-Cookie gespeichert. Die Seite enthält ein {{htmlelement("form")}}-Element, das es dem Benutzer ermöglicht, Gelder an eine andere Person zu überweisen. Wenn der Benutzer das Formular absendet, sendet der Browser eine {{httpmethod("POST")}}-Anfrage an den Server, einschließlich der Formulardaten. Wenn der Benutzer angemeldet ist, enthält die Anfrage das Cookie des Benutzers. Der Server validiert das Cookie und führt die spezielle Aktion aus – in diesem Fall die Überweisung von Geld:

![Diagramm, das zeigt, wie ein Benutzer ein Browser-Formular absendet, der Browser dann eine POST-Anfrage an den Server macht und der Server die Anfrage validiert.](form-post.svg)

In diesem Leitfaden nennen wir eine solche Anfrage, die eine spezielle Aktion durchführt, eine _zustandsändernde Anfrage_.

Bei einem CSRF-Angriff erstellt der Angreifer eine Website, die ein Formular enthält. Das [`action`-Attribut](/de/docs/Web/HTML/Element/form#action) des Formulars ist auf die Website der Bank gesetzt, und das Formular enthält versteckte Eingabefelder, die die Felder der Bank nachahmen:

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

Wenn der Benutzer die Seite besucht, sendet der Browser das Formular an die Website der Bank. Da der Benutzer bei seiner Bank angemeldet ist, kann die Anfrage das echte Cookie des Benutzers enthalten, sodass der Server der Bank die Anfrage erfolgreich validiert und die Gelder überweist:

![Diagramm, das einen CSRF-Angriff zeigt, bei dem eine gefälschte Seite eine POST-Anfrage an die Website der Bank des Benutzers sendet.](csrf-form-post.svg)

Es gibt weitere Möglichkeiten für den Angreifer, eine Cross-Site-Request-Forgery durchzuführen. Wenn die Website zum Beispiel eine {{httpmethod("GET")}}-Anfrage verwendet, um die Aktion auszuführen, kann der Angreifer darauf verzichten, ein Formular zu verwenden, und den Angriff ausführen, indem er dem Benutzer einen Link zu einer Seite sendet, die Markup wie dieses enthält:

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

In diesem Abschnitt skizzieren wir drei alternative Abwehrmaßnahmen gegen CSRF und eine vierte Praxis, die zur Bereitstellung einer Defense-in-Depth für jede der anderen genutzt werden kann.

- Die erste Hauptabwehrmaßnahme besteht darin, [CSRF-Token zu verwenden](#csrf-token), die in die Seite eingebettet sind. Dies ist die häufigste Methode, wenn Sie wie in unserem obigen Beispiel zustandsverändernde Anfragen über Formularelemente senden.

- Die zweite besteht darin, [Fetch-Metadaten-HTTP-Header](#fetch-metadaten) zu verwenden, um zu überprüfen, ob die zustandsverändernde Anfrage siteübergreifend ausgegeben wird oder nicht.

- Die dritte stellt sicher, dass zustandsverändernde Anfragen [keine einfachen Anfragen](#vermeidung_einfacher_anfragen) sind, sodass Cross-Origin-Anfragen standardmäßig blockiert werden. Diese Methode ist geeignet, wenn Sie zustandsverändernde Anfragen über JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch) senden.

Zuletzt besprechen wir [das `SameSite`-Cookie-Attribut](#defense_in_depth_samesite_cookies), das zusätzlich zu einer der vorherigen Methoden eine Defense-in-Depth bieten kann.

### CSRF-Token

Bei dieser Abwehrmaßnahme bettet der Server beim Ausliefern einer Seite einen unvorhersehbaren Wert, den CSRF-Token, in die Seite ein. Wenn die legitime Seite die zustandsverändernde Anfrage an den Server sendet, enthält sie den CSRF-Token in der HTTP-Anfrage. Der Server kann dann den Token-Wert überprüfen und die Anfrage nur ausführen, wenn er übereinstimmt. Da ein Angreifer den Token-Wert nicht erraten kann, kann er keine erfolgreiche Fälschung ausstellen. Selbst wenn der Angreifer einen Token entdeckt, nachdem er verwendet wurde, kann die Anfrage nicht erneut gesendet werden, wenn sich der Token jedes Mal ändert.

Bei Formularübermittlungen wird der CSRF-Token normalerweise in einem versteckten Formularfeld enthalten, sodass er bei der Formularübermittlung automatisch an den Server zurückgesendet wird, um geprüft zu werden.

Für eine JavaScript-API wie `fetch()` könnte der Token in einem Cookie platziert oder in die Seite eingebettet werden, und das JavaScript extrahiert den Wert und sendet ihn als zusätzlichen Header.

Moderne Web-Frameworks haben in der Regel eine eingebaute Unterstützung für CSRF-Token: Zum Beispiel ermöglicht Ihnen [Django](https://www.djangoproject.com/), Formulare mit dem [`csrf_token`](https://docs.djangoproject.com/en/5.1/ref/csrf/) Tag zu schützen. Dies erzeugt ein zusätzliches verstecktes Formularfeld, das den Token enthält, welchen das Framework dann auf dem Server überprüft.

Um diese Schutzmaßnahme zu nutzen, müssen Sie alle Stellen auf Ihrer Website verstehen, an denen Sie zustandsverändernde HTTP-Anfragen verwenden, und sicherstellen, dass Sie die Abwehrmaßnahme Ihres ausgewählten Frameworks verwenden.

### Fetch-Metadaten

Fetch-Metadaten sind eine Sammlung von HTTP-Request-Headern, die vom Browser hinzugefügt werden und zusätzliche Informationen über den Kontext einer HTTP-Anfrage bereitstellen. Der Server kann diese Header verwenden, um zu entscheiden, ob eine Anfrage zugelassen wird oder nicht.

Am relevantesten für CSRF ist der {{httpheader("Sec-Fetch-Site")}}-Header, der dem Server mitteilt, ob diese Anfrage gleichherkunfts-, gleichseitig-, siteübergreifend oder direkt vom Benutzer initiiert wurde. Der Server kann diese Informationen verwenden, um Cross-Origin-Anfragen zuzulassen oder sie als potenzielle CSRF-Angriffe zu blockieren.

Zum Beispiel erlaubt dieser [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)-Code nur gleichseitige und gleichherkunfts-Anfragen:

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

Siehe {{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anforderungsheader")}} für die vollständige Liste der Fetch-Metadaten-Header, und [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch Metadata](https://web.dev/articles/fetch-metadata) für einen Leitfaden zur Verwendung dieser Funktion.

### Vermeidung einfacher Anfragen

Webbrowser unterscheiden zwei Arten von HTTP-Anfragen: [_einfache_ Anfragen](/de/docs/Web/HTTP/Guides/CORS#simple_requests) und andere Anfragen.

Einfache Anfragen, die durch die Einsendung eines `<form>`-Elements resultieren, können ohne Blockierung cross-origin ausgeführt werden. Da Formulare seit den Anfängen des Webs in der Lage sind, Cross-Origin-Anfragen zu stellen, ist es aus Kompatibilitätsgründen wichtig, dass sie weiterhin Cross-Origin-Anfragen stellen können. Aus diesem Grund müssen wir andere Strategien implementieren, um Formulare gegen CRSF zu verteidigen, wie zum Beispiel die Verwendung eines CSRF-Tokens.

Andere Teile der Webplattform, insbesondere JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch), können jedoch andere Arten von Anfragen stellen (zum Beispiel Anfragen, die benutzerdefinierte Header setzen), und diese Anfragen sind standardmäßig nicht erlaubt, Cross-Origin ausgeführt zu werden, sodass ein CSRF-Angriff nicht erfolgreich sein würde.

Eine Website, die `fetch()` oder `XMLHttpRequest` verwendet, kann sich gegen CSRF schützen, indem sie sicherstellt, dass die zustandsverändernden Anfragen, die sie ausführt, niemals einfache Anfragen sind.

Zum Beispiel verhindern Sie, dass die Anfrage als einfache Anfrage behandelt wird, indem Sie den {{httpheader("Content-Type")}} auf `"application/json"` setzen:

```js
fetch("https://my-bank.example.org/transfer", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ recipient: "joe", amount: "100" }),
});
```

Ähnlich verhindert das Setzen eines benutzerdefinierten Headers in der Anfrage, dass sie als einfache Anfrage behandelt wird:

```js
fetch("https://my-bank.example.org/transfer", {
  method: "POST",
  headers: {
    "X-MY-BANK-ANTI-CSRF": 1,
  },
  body: JSON.stringify({ recipient: "joe", amount: "100" }),
});
```

Der Headername kann beliebig sein, solange er nicht mit Standardheadern in Konflikt steht.

Der Server kann dann das Vorhandensein des Headers überprüfen: Wenn er existiert, weiß der Server, dass die Anfrage nicht als einfache Anfrage behandelt wurde.

#### Nicht-einfache Anfragen und CORS

Wir haben gesagt, dass nicht-einfache Anfragen standardmäßig nicht Cross-Origin gesendet werden. Der Haken ist, dass das [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)-Protokoll einer Website erlaubt, diese Einschränkung zu lockern.

Insbesondere ist Ihre Website für einen CSRF-Angriff von einem bestimmten Ursprung anfällig, wenn ihre Antwort auf eine zustandsverändernde Anfrage Folgendes enthält:

- Den {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader, und der Header listet den Ursprung des Senders auf.
- Den {{httpheader("Access-Control-Allow-Credentials")}}-Antwortheader.

### Defense-in-Depth: SameSite-Cookies

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Cookie-Attribut bietet einen gewissen Schutz gegen CSRF-Angriffe. Es ist keine vollständige Verteidigung und wird am besten als Ergänzung zu einer der anderen Verteidigungen betrachtet und bietet ein gewisses Maß an Defense-in-Depth.

Dieses Attribut kontrolliert, wann ein Browser das Cookie in eine siteübergreifende Anfrage einfügen darf. Es hat drei mögliche Werte: `None`, `Lax` und `Strict`.

Der `Strict`-Wert bietet den größten Schutz: Wenn dieses Attribut gesetzt ist, wird der Browser das Cookie in keine siteübergreifende Anfrage einfügen. Dies erzeugt jedoch ein Nutzbarkeitsproblem: Wenn der Benutzer in Ihr System eingeloggt ist und einem Link zu Ihrer Seite von einer anderen Site folgt, werden Ihre Cookies nicht eingefügt und der Benutzer wird beim Erreichen Ihrer Seite nicht erkannt.

Der `Lax`-Wert lockert diese Einschränkung: Cookies werden in siteübergreifende Anfragen eingefügt, wenn beide der folgenden Bedingungen zutreffen:

- Die Anfrage war eine Navigation des obersten Browsing-Kontexts.
- Die Anfrage verwendete eine {{Glossary("Safe/HTTP", "sichere")}} Methode: insbesondere {{httpmethod("GET")}} ist sicher, aber {{httpmethod("POST")}} nicht.

`Lax` bietet jedoch einen deutlich schwächeren Schutz als `Strict`:

- Ein Angreifer kann eine Navigation auf oberster Ebene auslösen. Zum Beispiel zeigen wir zu Beginn dieses Artikels einen CSRF-Angriff, bei dem der Angreifer ein Formular an das Ziel sendet: Dies wird als Navigation auf oberster Ebene betrachtet. Wenn das Formular mit `GET` übermittelt würde, würde die Anfrage trotzdem Cookies mit `SameSite=Lax` enthalten.
- Auch wenn der Server überprüft, ob die Anfrage nicht mit `GET` gesendet wurde, unterstützen einige Web-Frameworks das "Method Override": damit kann ein Angreifer eine Anfrage mit `GET` senden, aber sie erscheint für den Server so, als ob sie mit `POST` gesendet wurde.

Allgemein gesagt, sollten Sie versuchen, `Strict` für einige Cookies und `Lax` für andere zu verwenden:

- `Lax` für Cookies, die Sie verwenden werden, um zu entscheiden, ob einem eingeloggten Benutzer eine Seite angezeigt werden soll.
- `Strict` für Cookies, die Sie für zustandsverändernde Anfragen verwenden werden, die Sie nicht Cross-Site zulassen möchten.

Ein weiteres Problem mit dem `SameSite`-Attribut ist, dass es Sie vor Anfragen von einer anderen {{Glossary("Site", "Site")}} schützt, nicht von einem anderen {{Glossary("Origin", "Ursprung")}}. Dies ist ein lockerer Schutz, da (zum Beispiel) `https://foo.example.org` und `https://bar.example.org` als dieselbe Site gelten, obwohl sie unterschiedliche Ursprünge sind. Im Wesentlichen, wenn Sie sich auf den Schutz gleicher Site verlassen, müssen Sie allen Subdomains Ihrer Site vertrauen.

Siehe [Bypassing SameSite cookie restrictions](https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions) für weitere Details zu den Einschränkungen von `SameSite`.

### Defense-Checkliste zur Zusammenfassung

Wir können die oben genannten Abwehrmaßnahmen wie folgt zusammenfassen:

- Verstehen Sie, wo auf Ihrer Website Sie zustandsverändernde Anfragen implementieren, die Sitzungscookies verwenden, um zu überprüfen, welcher Benutzer die Anfrage gestellt hat.
- Implementieren Sie mindestens eine der in diesem Dokument beschriebenen Hauptabwehrmaßnahmen:
  - Wenn Sie `<form>`-Elemente verwenden, um diese Anfragen zu stellen, stellen Sie sicher, dass Sie ein Web-Framework mit Unterstützung für CSRF-Token verwenden, und nutzen Sie es.
  - Wenn Sie JavaScript-APIs wie `fetch()` oder `XMLHttpRequest` verwenden, um zustandsverändernde Anfragen zu stellen, stellen Sie sicher, dass es sich nicht um einfache Anfragen handelt.
  - Welchen Mechanismus Sie auch verwenden, um Anfragen zu stellen, ziehen Sie in Betracht, Fetch-Metadaten zu verwenden, um Cross-Site-Anfragen zu verhindern.
- Vermeiden Sie die Verwendung der `GET`-Methode für zustandsverändernde Anfragen.
- Setzen Sie das `SameSite`-Attribut für Sitzungs-Cookies auf `Strict`, wenn Sie können, oder `Lax`, wenn Sie müssen.

## Siehe auch

- [Cross-Site Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) auf [owasp.org](https://owasp.org/)

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Security", "1", "0", "1")}}
</section>

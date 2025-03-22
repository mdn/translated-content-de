---
title: Cross-Site Request Forgery (CSRF)
slug: Web/Security/Attacks/CSRF
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

Bei einem Cross-Site Request Forgery (CSRF)-Angriff manipuliert ein Angreifer den Benutzer oder den Browser, um eine HTTP-Anfrage von einer bösartigen Website an die Zielseite zu senden. Die Anfrage enthält die Anmeldeinformationen des Benutzers und veranlasst den Server, eine schädliche Aktion auszuführen, indem er annimmt, dass der Benutzer dies beabsichtigte.

## Übersicht

Eine Website führt typischerweise spezielle Aktionen im Namen eines Benutzers aus - beispielsweise den Kauf eines Produkts oder die Vereinbarung eines Termins -, indem sie eine HTTP-Anfrage vom Browser des Benutzers erhält, oft mit Parametern, die die auszuführende Aktion beschreiben. Um sicherzustellen, dass die Anfrage tatsächlich vom betreffenden Benutzer kommt, erwartet der Server, dass die Anfrage {{Glossary("Credential", "Anmeldeinformationen")}} des Benutzers enthält: zum Beispiel ein Cookie, das die Sitzungs-ID des Benutzers enthält.

Im untenstehenden Beispiel hat sich der Benutzer zuvor bei seiner Bank angemeldet und der Browser hat ein Sitzungs-Cookie für den Benutzer gespeichert. Die Seite enthält ein {{htmlelement("form")}}-Element, das es dem Benutzer ermöglicht, Geld an eine andere Person zu überweisen. Wenn der Benutzer das Formular sendet, sendet der Browser eine {{httpmethod("POST")}}-Anfrage an den Server, einschließlich der Formulardaten. Wenn der Benutzer angemeldet ist, enthält die Anfrage das Cookie des Benutzers. Der Server validiert das Cookie und führt die spezielle Aktion aus - in diesem Fall das Überweisen von Geld:

![Diagramm zeigt, wie ein Benutzer ein Browserformular sendet, der Browser dann eine POST-Anfrage an den Server sendet und der Server die Anfrage validiert.](form-post.svg)

In diesem Leitfaden werden wir eine solche Anfrage, die eine spezielle Aktion ausführt, als _statusverändernde Anfrage_ bezeichnen.

Bei einem CSRF-Angriff erstellt der Angreifer eine Website mit einem Formular. Das `action`-Attribut des Formulars ist auf die Website der Bank gesetzt, und es enthält versteckte Eingabefelder, die die Felder der Bank nachahmen:

```html
<form action="https://my-bank.example.org/transfer" method="POST">
  <input type="hidden" name="recipient" value="attacker" />
  <input type="hidden" name="amount" value="1000" />
</form>
```

Die Seite enthält auch JavaScript, das das Formular beim Laden der Seite sendet:

```js
const form = document.querySelector("form");
form.submit();
```

Wenn der Benutzer die Seite besucht, sendet der Browser das Formular an die Website der Bank. Da der Benutzer bei seiner Bank angemeldet ist, kann die Anfrage das echte Cookie des Benutzers enthalten, sodass der Server der Bank die Anfrage erfolgreich validiert und die Gelder überweist:

![Diagramm zeigt einen CSRF-Angriff, bei dem eine Köderseite eine POST-Anfrage an die Website der Bank des Benutzers sendet.](csrf-form-post.svg)

Es gibt andere Möglichkeiten, wie der Angreifer eine Cross-Site Request Forgery durchführen könnte. Zum Beispiel, wenn die Website eine {{httpmethod("GET")}}-Anfrage verwendet, um die Aktion auszuführen, kann der Angreifer vermeiden, ein Formular zu verwenden, und den Angriff ausführen, indem er dem Benutzer einen Link zu einer Seite sendet, die eine Markup wie dieses enthält:

```html
<img
  src="https://my-bank.example.org/transfer?recipient=attacker&amount=1000" />
```

Wenn der Benutzer die Seite lädt, versucht der Browser, die Bildressource abzurufen, was in Wirklichkeit die Transaktionsanfrage ist.

Im Allgemeinen ist ein CSRF-Angriff möglich, wenn Ihre Website:

- HTTP-Anfragen verwendet, um den Status auf dem Server zu ändern.
- Nur Cookies benutzt, um zu überprüfen, ob die Anfrage von einem authentifizierten Benutzer stammt.
- Lediglich Parameter in der Anfrage benutzt, die ein Angreifer vorhersagen kann.

## Abwehrmaßnahmen gegen CSRF

In diesem Abschnitt skizzieren wir drei alternative Abwehrmaßnahmen gegen CSRF und eine vierte Praxis, die zur Verstärkung der anderen beiden Maßnahmen eingesetzt werden kann.

- Die erste primäre Abwehrmaßnahme besteht darin, [CSRF-Token zu verwenden](#csrf-token), die in die Seite eingebettet sind. Dies ist die gängigste Methode, wenn Sie statusverändernde Anfragen von Formularelementen ausstellen, wie in unserem obigen Beispiel.

- Die zweite Möglichkeit ist, [Fetch-Metadaten-HTTP-Header zu verwenden](fetch_metadata), um zu überprüfen, ob die statusverändernde Anfrage cross-site ausgestellt wird oder nicht.

- Die dritte Möglichkeit besteht darin sicherzustellen, dass statusverändernde Anfragen [keine einfachen Anfragen sind](#vermeiden_einfacher_anfragen), sodass cross-origin Anfragen standardmäßig blockiert werden. Diese Methode ist geeignet, wenn Sie statusverändernde Anfragen von JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch) ausstellen.

Abschließend werden wir das [`SameSite`-Cookie-Attribut](#defense_in_depth_samesite_cookies) besprechen, das zur zusätzlichen Absicherung neben einer der vorherigen Methoden verwendet werden kann.

### CSRF-Token

Bei dieser Abwehrmaßnahme bettet der Server beim Ausliefern einer Seite einen unvorhersehbaren Wert in die Seite ein, den sogenannten CSRF-Token. Wenn die legitime Seite dann die statusverändernde Anfrage an den Server sendet, enthält sie den CSRF-Token in der HTTP-Anfrage. Der Server kann dann den Token-Wert überprüfen und die Anfrage nur ausführen, wenn er übereinstimmt. Da ein Angreifer den Token-Wert nicht erraten kann, können sie keine erfolgreiche Fälschung durchführen. Selbst wenn der Angreifer nach der Verwendung eines Tokens davon erfährt, kann die Anfrage nicht erneut ausgeführt werden, wenn der Token sich jedes Mal ändert.

Bei Formularübermittlungen wird der CSRF-Token üblicherweise in einem versteckten Formularfeld enthalten, sodass er bei der Formularübermittlung automatisch zurück an den Server zur Überprüfung gesendet wird.

Bei einer JavaScript-API wie `fetch()` könnte der Token in einem Cookie abgelegt oder in der Seite eingebettet werden, und das JavaScript extrahiert den Wert und sendet ihn als zusätzlichen Header.

Moderne Web-Frameworks verfügen in der Regel über eingebaute Unterstützung für CSRF-Token: zum Beispiel ermöglicht [Django](https://www.djangoproject.com/) es Ihnen, Formulare mit dem [`csrf_token`](https://docs.djangoproject.com/en/5.1/ref/csrf/)-Tag zu schützen. Dies erzeugt ein zusätzliches verstecktes Formularfeld, das den Token enthält, den das Framework dann auf dem Server überprüft.

Um diesen Schutz zu nutzen, müssen Sie verstehen, an welchen Stellen Ihrer Website Sie statusverändernde HTTP-Anfragen verwenden, und sicherstellen, dass Sie die von Ihrem gewählten Framework bereitgestellten Abwehrmaßnahmen nutzen.

### Fetch-Metadaten

Fetch-Metadaten sind eine Sammlung von HTTP-Anfrage-Headern, die vom Browser hinzugefügt werden und zusätzliche Informationen über den Kontext einer HTTP-Anfrage liefern. Der Server kann diese Header verwenden, um zu entscheiden, ob er eine Anfrage zulässt oder nicht.

Am relevantesten für CSRF ist der {{httpheader("Sec-Fetch-Site")}}-Header, der dem Server mitteilt, ob diese Anfrage same-origin, same-site, cross-site ist oder direkt vom Benutzer initiiert wurde. Der Server kann diese Informationen verwenden, um über cross-origin Anfragen zu entscheiden oder diese als potenzielle CSRF-Angriffe zu blockieren.

Zum Beispiel ermöglicht dieser [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)-Code nur same-site und same-origin Anfragen:

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

Siehe {{Glossary("Fetch_metadata_request_header", "Fetch-Metadatenanforderungs-Header")}} für die vollständige Liste der Fetch-Metadaten-Header und [Schützen Sie Ihre Ressourcen vor Web-Angriffen mit Fetch-Metadaten](https://web.dev/articles/fetch-metadata) für einen Leitfaden zur Nutzung dieser Funktion.

### Vermeiden einfacher Anfragen

Webbrowser unterscheiden zwei Arten von HTTP-Anfragen: _einfache_ Anfragen und andere Anfragen.

Einfache Anfragen, die aus einer `<form>`-Element-Übermittlung resultieren, können ohne Blockierung cross-origin ausgeführt werden. Da Formulare seit den frühen Tagen des Webs in der Lage sind, cross-origin Anfragen zu stellen, ist es wichtig, dass sie aus Kompatibilitätsgründen weiterhin cross-origin Anfragen stellen können. Deshalb müssen wir andere Strategien implementieren, um Formulare gegen CSRF zu schützen, wie z. B. die Verwendung eines CSRF-Tokens.

Andere Teile der Webplattform, insbesondere JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch) können jedoch andere Arten von Anfragen stellen (z. B. Anfragen, die benutzerdefinierte Header setzen), und diese Anfragen sind standardmäßig nicht cross-origin erlaubt, sodass ein CSRF-Angriff nicht gelingen würde.

Eine Website, die `fetch()` oder `XMLHttpRequest` verwendet, kann sich gegen CSRF verteidigen, indem sie sicherstellt, dass die von ihr ausgestellten statusverändernden Anfragen niemals einfache Anfragen sind.

Zum Beispiel verhindert das Setzen des {{httpheader("Content-Type")}} der Anfrage auf `"application/json"`, dass es als einfache Anfrage behandelt wird:

```js
fetch("https://my-bank.example.org/transfer", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ recipient: "joe", amount: "100" }),
});
```

Ähnlich verhindert das Setzen eines benutzerdefinierten Headers auf der Anfrage, dass diese als einfache Anfrage behandelt wird:

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

Wir haben gesagt, dass nicht-einfache Anfragen standardmäßig nicht cross-origin gesendet werden. Der Haken dabei ist, dass das [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)-Protokoll es einer Website ermöglicht, diese Einschränkung zu lockern.

Insbesondere wird Ihre Website von einem bestimmten Ursprung aus anfällig für einen CSRF-Angriff sein, wenn ihre Antwort auf eine statusverändernde Anfrage Folgendes enthält:

- Den {{httpheader("Access-Control-Allow-Origin")}}-Antwort-Header, und der Header listet den Ursprung des Absenders auf
- Den {{httpheader("Access-Control-Allow-Credentials")}}-Antwort-Header.

### Defense in Depth: SameSite Cookies

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Cookie-Attribut bietet einen gewissen Schutz gegen CSRF-Angriffe. Es ist keine vollständige Abwehrmaßnahme und sollte am besten als Ergänzung zu einer der anderen Methoden betrachtet werden, um eine zusätzliche Sicherheitstiefe zu schaffen.

Dieses Attribut steuert, wann ein Browser das Cookie in einer cross-site Anfrage einfügen darf. Es hat drei mögliche Werte: `None`, `Lax` und `Strict`.

Der `Strict`-Wert bietet den stärksten Schutz: Wenn dieses Attribut gesetzt ist, wird der Browser das Cookie bei keiner cross-site Anfrage einfügen. Dies führt jedoch zu einem Usability-Problem: Wenn der Benutzer auf Ihrer Seite angemeldet ist und einem Link von einer anderen Seite zu Ihrer Seite folgt, werden Ihre Cookies nicht eingefügt und der Benutzer wird nicht erkannt, wenn er Ihre Seite erreicht.

Der `Lax`-Wert lockert diese Einschränkung: Cookies werden in cross-site Anfragen eingefügt, wenn beide der folgenden Bedingungen zutreffen:

- Die Anfrage war eine Navigation des obersten Browsing-Kontextes.
- Die Anfrage verwendete eine {{Glossary("Safe/HTTP", "sichere")}} Methode: insbesondere ist {{httpmethod("GET")}} sicher, aber {{httpmethod("POST")}} nicht.

Allerdings bietet `Lax` einen deutlich schwächeren Schutz als `Strict`:

- Ein Angreifer kann eine Navigation im obersten Kontext auslösen. Zum Beispiel zeigen wir zu Beginn dieses Artikels einen CSRF-Angriff, bei dem der Angreifer ein Formular an das Ziel sendet: dies wird als Navigation im obersten Kontext betrachtet. Wenn das Formular mit `GET` gesendet würde, würde die Anfrage trotzdem Cookies mit `SameSite=Lax` enthalten.
- Selbst wenn der Server überprüft, dass die Anfrage nicht mit `GET` gesendet wurde, unterstützen einige Web-Frameworks "Methodenüberschreibung": Dadurch kann ein Angreifer eine Anfrage mit `GET` senden, die dem Server jedoch wie eine `POST`-Anfrage erscheint.

Als allgemeiner Leitfaden sollten Sie daher versuchen, `Strict` für einige Cookies und `Lax` für andere zu verwenden:

- `Lax` für Cookies, die Sie verwenden werden, um zu entscheiden, ob einem angemeldeten Benutzer eine Seite angezeigt werden soll
- `Strict` für Cookies, die Sie für statusverändernde Anfragen verwenden, die Sie nicht cross-site zulassen möchten.

Ein weiteres Problem mit dem `SameSite`-Attribut ist, dass es Sie vor Anfragen von einer verschiedenen {{Glossary("Site", "Site")}} schützt, nicht von einem verschiedenen {{Glossary("Origin", "Herkunft")}}. Dies ist ein schwächerer Schutz, da (zum Beispiel) `https://foo.example.org` und `https://bar.example.org` als dieselbe Site betrachtet werden, obwohl sie unterschiedliche Ursprünge sind. Effektiv müssen Sie, wenn Sie auf gleiche Site-Abwehrmaßnahmen vertrauen, allen Subdomains Ihrer Site vertrauen.

Siehe [Bypassing SameSite cookie restrictions](https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions) für weitere Details zu den Einschränkungen von `SameSite`.

### Abwehrzusammenfassung-Checkliste

Wir können die oben genannten Abwehrmaßnahmen wie folgt zusammenfassen:

- Verstehen Sie, wo auf Ihrer Website Sie statusverändernde Anfragen implementieren, die Sitzungs-Cookies verwenden, um zu überprüfen, welcher Benutzer die Anfrage gestellt hat.
- Implementieren Sie mindestens eine der in diesem Dokument beschriebenen Hauptabwehrmaßnahmen:
  - Wenn Sie `<form>`-Elemente verwenden, um diese Anfragen zu stellen, stellen Sie sicher, dass Sie ein Web-Framework mit Unterstützung für CSRF-Token verwenden, und nutzen Sie es.
  - Wenn Sie JavaScript-APIs wie `fetch()` oder `XMLHttpRequest` verwenden, um statusverändernde Anfragen zu stellen, stellen Sie sicher, dass sie keine einfachen Anfragen sind.
  - Unabhängig davon, welches Mechanismus Sie verwenden, um Anfragen zu stellen, sollten Sie Fetch-Metadaten verwenden, um cross-site Anfragen zu blockieren.
- Verwenden Sie nicht die `GET`-Methode, um statusverändernde Anfragen zu stellen.
- Setzen Sie das `SameSite`-Attribut für Sitzungs-Cookies auf `Strict`, wenn Sie können, oder `Lax`, wenn Sie müssen.

## Siehe auch

- [Cross-Site Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Security", "1", "0", "1")}}
</section>

---
title: Cross-Site Request Forgery (CSRF)
slug: Web/Security/Attacks/CSRF
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Bei einem Cross-Site Request Forgery (CSRF)-Angriff trickst ein Angreifer den Benutzer oder den Browser aus, eine HTTP-Anfrage an die Zielseite von einer bösartigen Seite aus zu senden. Die Anfrage enthält die Anmeldedaten des Benutzers und veranlasst den Server, eine schädliche Aktion durchzuführen, indem dieser denkt, dass der Benutzer sie beabsichtigt hat.

## Überblick

Eine Website führt typischerweise spezielle Aktionen im Namen eines Benutzers durch – beispielsweise den Kauf eines Produkts oder die Vereinbarung eines Termins – indem sie eine HTTP-Anfrage vom Browser des Benutzers empfängt, oft mit Parametern, die die auszuführende Aktion detaillieren. Um sicherzustellen, dass die Anfrage wirklich vom Nutzer in Frage stammt, erwartet der Server, dass die Anfrage {{Glossary("Credential", "Anmeldedaten")}} des Benutzers enthält: zum Beispiel ein Cookie, das die Sitzungs-ID des Benutzers enthält.

Im folgenden Beispiel hat sich der Benutzer zuvor bei seiner Bank angemeldet, und der Browser hat ein Sitzungscookie für den Benutzer gespeichert. Die Seite enthält ein {{htmlelement("form")}}-Element, das es dem Benutzer ermöglicht, Geld an eine andere Person zu überweisen. Wenn der Benutzer das Formular absendet, sendet der Browser eine {{httpmethod("POST")}}-Anfrage an den Server, die die Formulardaten enthält. Wenn der Benutzer angemeldet ist, enthält die Anfrage das Cookie des Benutzers. Der Server validiert das Cookie und führt die spezielle Aktion aus – in diesem Fall die Geldüberweisung:

![Diagramm, das zeigt, wie ein Benutzer ein Browserformular absendet, wonach der Browser eine POST-Anfrage an den Server sendet, und der Server die Anfrage validiert.](form-post.svg)

In diesem Leitfaden nennen wir eine Anfrage wie diese, die eine spezielle Aktion durchführt, eine _statusverändernde Anfrage_.

Bei einem CSRF-Angriff erstellt der Angreifer eine Website mit einem Formular. Das [`action`-Attribut](/de/docs/Web/HTML/Reference/Elements/form#action) des Formulars ist auf die Website der Bank gesetzt, und das Formular enthält versteckte Eingabefelder, die die Felder der Bank nachahmen:

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

![Diagramm, das einen CSRF-Angriff zeigt, bei dem eine Köderseite eine POST-Anfrage an die Website der Bank des Benutzers sendet.](csrf-form-post.svg)

Der Angreifer könnte auf andere Weise eine CSRF auslösen. Zum Beispiel, wenn die Website eine {{httpmethod("GET")}}-Anfrage verwendet, um die Aktion durchzuführen, könnte der Angreifer die Nutzung eines Formulars ganz vermeiden und den Angriff ausführen, indem er dem Benutzer einen Link zu einer Seite sendet, die Markup wie dieses enthält:

```html
<img
  src="https://my-bank.example.org/transfer?recipient=attacker&amount=1000" />
```

Wenn der Benutzer die Seite lädt, versucht der Browser, die Bildressource abzurufen, die eigentlich die Transaktionsanfrage ist.

Im Allgemeinen ist ein CSRF-Angriff möglich, wenn Ihre Website:

- HTTP-Anfragen verwendet, um den Status auf dem Server zu ändern.
- Nur Cookies verwendet, um zu validieren, dass die Anfrage von einem authentifizierten Benutzer stammt.
- Nur Parameter in der Anfrage verwendet, die ein Angreifer vorhersagen kann.

## Verteidigungen gegen CSRF

In diesem Abschnitt skizzieren wir drei alternative Verteidigungen gegen CSRF und eine vierte Praxis, die verwendet werden kann, um eine tiefere Verteidigung für jede der anderen zu gewährleisten.

- Die erste primäre Verteidigung besteht darin, [CSRF-Token](#csrf-token) zu verwenden, die in die Seite eingebettet sind. Dies ist die häufigste Methode, wenn Sie statusverändernde Anfragen von Formularelementen ausstellen, wie in unserem obigen Beispiel.

- Die zweite besteht darin, [Fetch-Metadaten](#fetch-metadaten) HTTP-Header zu verwenden, um zu überprüfen, ob die statusverändernde Anfrage cross-site ausgestellt wird.

- Die dritte besteht darin, sicherzustellen, dass statusverändernde Anfragen [keine _einfachen Anfragen_](#vermeidung_einfacher_anfragen) sind, sodass cross-origin Anfragen standardmäßig blockiert werden. Diese Methode ist angebracht, wenn Sie statusverändernde Anfragen von JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch) ausstellen.

Schließlich besprechen wir das [`SameSite`-Cookie-Attribut](#defense_in_depth_samesite_cookies), das verwendet werden kann, um zusammen mit jeder der vorhergehenden Methoden eine tiefere Verteidigung zu bieten.

### CSRF-Token

Bei dieser Verteidigung bettet der Server beim Bereitstellen einer Seite einen unvorhersehbaren Wert in die Seite ein, der als CSRF-Token bezeichnet wird. Wenn die legitime Seite die statusverändernde Anfrage an den Server sendet, ist das CSRF-Token in der HTTP-Anfrage enthalten. Der Server kann dann den Tokenwert überprüfen und die Anfrage nur durchführen, wenn er übereinstimmt. Da ein Angreifer den Tokenwert nicht erraten kann, kann er keine erfolgreiche Fälschung ausstellen. Selbst wenn der Angreifer ein Token entdeckt, nachdem es verwendet wurde, kann die Anfrage nicht wiederholt werden, wenn der Token sich jedes Mal ändert.

Für Formularübermittlungen wird das CSRF-Token normalerweise in ein verstecktes Formularfeld eingefügt, sodass es bei der Formulareinreichung automatisch an den Server zur Überprüfung zurückgesendet wird.

Für eine JavaScript-API wie `fetch()` könnte der Token in einem Cookie abgelegt oder in die Seite eingebettet werden, und das JavaScript extrahiert den Wert und sendet ihn als zusätzlichen Header.

Moderne Web-Frameworks haben normalerweise eingebaute Unterstützung für CSRF-Token: zum Beispiel ermöglicht [Django](https://www.djangoproject.com/) Ihnen, Formulare mit dem [`csrf_token`](https://docs.djangoproject.com/en/5.1/ref/csrf/) Tag zu schützen. Dies erzeugt ein zusätzliches verstecktes Formularfeld, das den Token enthält, den das Framework dann auf dem Server überprüft.

Um diesen Schutz zu nutzen, müssen Sie alle Stellen auf Ihrer Website verstehen, an denen Sie statusverändernde HTTP-Anfragen verwenden, und sicherstellen, dass Sie den Schutz Ihres gewählten Frameworks verwenden.

### Fetch-Metadaten

Fetch-Metadaten sind eine Sammlung von HTTP-Anfrage-Headern, die vom Browser hinzugefügt werden und zusätzliche Informationen über den Kontext einer HTTP-Anfrage bereitstellen. Der Server kann diese Header verwenden, um zu entscheiden, ob eine Anfrage zulässig ist oder nicht.

Am relevantesten für CSRF ist der {{httpheader("Sec-Fetch-Site")}}-Header, der dem Server mitteilt, ob diese Anfrage same-origin, same-site, cross-site oder direkt vom Benutzer initiiert ist. Der Server kann diese Informationen verwenden, um cross-origin Anfragen zuzulassen oder sie als potenzielle CSRF-Angriffe zu blockieren.

Zum Beispiel erlaubt dieser [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)-Code nur same-site und same-origin Anfragen:

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

Siehe {{Glossary("Fetch_metadata_request_header", "Fetch-Metadatenanfrage-Header")}} für die vollständige Liste der Fetch-Metadaten-Header, und [Schützen Sie Ihre Ressourcen vor Web-Angriffen mit Fetch-Metadaten](https://web.dev/articles/fetch-metadata) für einen Leitfaden zur Nutzung dieser Funktion.

### Vermeidung einfacher Anfragen

Webbrowser unterscheiden zwischen zwei Arten von HTTP-Anfragen: _einfache_ Anfragen und andere Anfragen.

Einfache Anfragen, die die Art von Anfrage sind, die aus einer `<form>`-Elementübermittlung resultieren, können grenzüberschreitend ohne Blockierung durchgeführt werden. Da Formulare seit den Anfängen des Web grenzüberschreitende Anfragen stellen konnten, ist es wichtig für die Kompatibilität, dass sie immer noch grenzüberschreitende Anfragen stellen können. Aus diesem Grund müssen wir andere Strategien implementieren, um Formulare gegen CSRF zu verteidigen, z. B. die Verwendung eines CSRF-Tokens.

Andere Teile der Webplattform, insbesondere JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch), können unterschiedliche Arten von Anfragen stellen (z.B. Anfragen, die benutzerdefinierte Header setzen), und diese Anfragen sind standardmäßig nicht grenzüberschreitend erlaubt, sodass ein CSRF-Angriff nicht erfolgreich wäre.

Eine Website, die `fetch()` oder `XMLHttpRequest` verwendet, kann sich gegen CSRF verteidigen, indem sie sicherstellt, dass die von ihr herausgegebenen statusverändernden Anfragen niemals einfache Anfragen sind.

Z. B. verhindert das Setzen des {{httpheader("Content-Type")}} der Anfrage auf `"application/json"`, dass sie als einfache Anfrage behandelt wird:

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

Der Server kann dann auf das Vorhandensein des Headers prüfen: wenn er existiert, weiß der Server, dass die Anfrage nicht als einfache Anfrage behandelt wurde.

#### Nicht-einfache Anfragen und CORS

Wir haben gesagt, dass nicht-einfache Anfragen _standardmäßig_ nicht grenzüberschreitend gesendet werden. Der Haken ist, dass das [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)-Protokoll es einer Website ermöglicht, diese Beschränkung zu lockern.

Insbesondere ist Ihre Website anfällig für einen CSRF-Angriff von einem bestimmten Ursprung, wenn die Antwort auf eine statusverändernde Anfrage Folgendes enthält:

- Der {{httpheader("Access-Control-Allow-Origin")}} Antwort-Header und der Header listet den Ursprung des Senders
- Der {{httpheader("Access-Control-Allow-Credentials")}} Antwort-Header.

### Verteidigung in der Tiefe: SameSite-Cookies

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Cookie-Attribut bietet einen gewissen Schutz gegen CSRF-Angriffe. Es ist kein vollständiger Schutz und sollte am besten als Ergänzung zu einer der anderen Verteidigungen betrachtet werden, um eine gewisse Tiefe der Verteidigung zu bieten.

Dieses Attribut kontrolliert, wann ein Browser das Cookie in einer grenzüberschreitenden Anfrage einschließen darf. Es hat drei mögliche Werte: `None`, `Lax` und `Strict`.

Der `Strict`-Wert bietet den meisten Schutz: wenn dieses Attribut gesetzt ist, wird der Browser das Cookie in keiner grenzüberschreitenden Anfrage einschließen. Dies führt jedoch zu einem Benutzerfreundlichkeitsproblem: wenn der Benutzer auf Ihrer Seite angemeldet ist und einem Link zu Ihrer Seite von einer anderen Seite folgt, werden Ihre Cookies nicht einbezogen, und der Benutzer wird nicht erkannt, wenn er Ihre Seite erreicht.

Der `Lax`-Wert lockert diese Beschränkung: Cookies werden in grenzüberschreitenden Anfragen eingeschlossen, wenn beide der folgenden Bedingungen zutreffen:

- Die Anfrage war eine Navigation des oberen Browsing-Kontexts.
- Die Anfrage verwendete eine {{Glossary("Safe/HTTP", "sichere")}} Methode: insbesondere, {{httpmethod("GET")}} ist sicher, aber {{httpmethod("POST")}} ist es nicht.

Jedoch bietet `Lax` einen deutlich schwächeren Schutz als `Strict`:

- Ein Angreifer kann eine Navigation im oberen Kontext auslösen. Zum Beispiel zeigen wir am Anfang dieses Artikels einen CSRF-Angriff, bei dem der Angreifer ein Formular an das Ziel sendet: dies wird als Navigation des oberen Kontexts betrachtet. Wenn das Formular mit `GET` gesendet werden würde, würde die Anfrage immer noch Cookies mit `SameSite=Lax` enthalten.
- Selbst wenn der Server überprüft, dass die Anfrage nicht mit `GET` gesendet wurde, unterstützen einige Web-Frameworks "Methodenüberschreibung": dies ermöglicht es einem Angreifer, eine Anfrage mit `GET` zu senden, die dem Server jedoch erscheint, als ob sie `POST` verwendet hätte.

Als allgemeine Anleitung sollten Sie versuchen, `Strict` für einige Cookies und `Lax` für andere zu verwenden:

- `Lax` für Cookies, die Sie verwenden, um zu entscheiden, ob einem angemeldeten Benutzer eine Seite angezeigt werden soll
- `Strict` für Cookies, die Sie für statusverändernde Anfragen verwenden, die Sie nicht grenzüberschreitend zulassen möchten.

Ein weiteres Problem mit dem `SameSite`-Attribut ist, dass es Sie vor Anfragen von einer anderen {{Glossary("Site", "Site")}} schützt, nicht vor einer anderen {{Glossary("Origin", "Origin")}}. Dies ist ein lockerer Schutz, da (zum Beispiel) `https://foo.example.org` und `https://bar.example.org` als dieselbe Seite angesehen werden, obwohl sie unterschiedliche Ursprünge sind. Effektiv bedeutet das, dass Sie, wenn Sie sich auf den Schutz gleichseitiger Anfragen verlassen, allen Subdomains Ihrer Seite vertrauen müssen.

Siehe [Umgehung von SameSite-Cookie-Beschränkungen](https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions) für mehr Details zu den Einschränkungen von `SameSite`.

### Verteidigungszusammenfassung Checkliste

Wir können die oben genannten Verteidigungen wie folgt zusammenfassen:

- Verstehen Sie, wo auf Ihrer Website Sie statusverändernde Anfragen implementieren, die Sitzungscookies verwenden, um zu überprüfen, welcher Benutzer die Anfrage ausgestellte.
- Implementieren Sie mindestens eine der primären Verteidigungen, die in diesem Dokument beschrieben sind:
  - Wenn Sie `<form>`-Elemente verwenden, um diese Anfragen auszustellen, stellen Sie sicher, dass Sie ein Web-Framework mit Unterstützung für CSRF-Token verwenden, und nutzen Sie es.
  - Wenn Sie JavaScript-APIs wie `fetch()` oder `XMLHttpRequest` verwenden, um statusverändernde Anfragen auszustellen, stellen Sie sicher, dass diese keine einfachen Anfragen sind.
  - Unabhängig davon, welchen Mechanismus Sie verwenden, um Anfragen auszustellen, ziehen Sie in Betracht, Fetch-Metadaten zu verwenden, um grenzüberschreitende Anfragen zu untersagen.
- Vermeiden Sie die Verwendung der `GET`-Methode, um statusverändernde Anfragen auszustellen.
- Setzen Sie das `SameSite`-Attribut für Sitzungscookies auf `Strict`, wenn Sie können, oder auf `Lax`, wenn Sie müssen.

## Siehe auch

- [Cross-Site Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Security", "1", "0", "1")}}
</section>

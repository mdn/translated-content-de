---
title: Direkte unsichere Objektreferenz (IDOR)
slug: Web/Security/Attacks/IDOR
l10n:
  sourceCommit: aa6c136a56b7861893376386fc572e9a505d39db
---

**Direkte unsichere Objektreferenz (IDOR)** ist eine Sicherheitslücke, die es einem Angreifer ermöglicht, unzureichende Zugriffskontrolle und unsichere Offenlegung von Objekt-Identifikatoren, wie Datenbankschlüssel oder Dateipfade, auszunutzen.

Websites möchten oft unterschiedlichen Benutzern verschiedene Inhalte anzeigen: Beispielsweise könnte eine Shopping-Website es jedem Benutzer ermöglichen, seinen Kaufverlauf anzusehen. Websites können Benutzer {{Glossary("Authentication", "authentifizieren")}}, indem sie eine Methode wie ein Passwort oder einen Sicherheitsschlüssel verwenden. Oftmals, nachdem eine Website einen Benutzer authentifiziert hat, wird ein Sitzungscookie im Browser dieses Benutzers gesetzt: Dann, wenn der Benutzer eine Anfrage stellt, weiß der Server, dass die Anfrage von diesem authentifizierten Benutzer stammt.

Allerdings muss der Server nicht nur überprüfen, dass die Anfrage von einem authentifizierten Benutzer stammt, sondern auch eine Zugriffskontrolle für die angeforderten Ressourcen implementieren: Das heißt, sie müssen überprüfen, ob dieser Benutzer berechtigt ist, auf die angeforderte Ressource zuzugreifen. Zum Beispiel darf jeder authentifizierte Benutzer nur seine eigenen Kaufverläufe sehen.

Wenn ein Server keine Zugriffskontrolle für Ressourcen implementiert, dann kann ein Angreifer, der auf der Seite angemeldet ist, möglicherweise auf die Ressourcen eines anderen Benutzers zugreifen. Dies wird als direkte unsichere Objektreferenz (IDOR)-Angriff bezeichnet.

## Beispiel Szenarien

Der klassische IDOR-Angriff tritt auf, wenn der Server nur überprüft, ob der Benutzer authentifiziert ist, nicht jedoch, ob er autorisiert ist, auf eine Objektreferenz zuzugreifen. In einem typischen Ablauf:

1. Meldet sich der Angreifer als normaler Benutzer an.
2. Findet eine URL, ein Formularfeld oder eine Datei, die auf eine Benutzer- oder Ressourcen-ID verweist (z. B. 1234).
3. Ändert die ID in einen anderen Wert (z. B. 1233).
4. Erhält unbefugten Zugriff auf die Daten eines anderen Benutzers.

In den folgenden Abschnitten werden wir einige konkrete Beispiele für diesen Angriff untersuchen.

### Manipulation der URL

Ein häufiger Typ von IDOR-Angriff betrifft die Manipulation von direkten Objektreferenzen in der URL. Die "1234" in den folgenden URLs ist ein Identifikator für den Datensatz des Benutzers in der Datenbank des Servers. Wenn ein Angreifer diese Zahl in eine andere Zahl (zum Beispiel "1235") ändert und auf die Informationen eines anderen Benutzers zugreift, ist Ihre Anwendung anfällig für direkte unsichere Objektreferenz.

```http
# The attacker is logged in as user 1234
https://example.org/user/id/1234

# The attacker changes the id in the URL and gains access to a different user
https://example.org/user/id/1235
```

Im folgenden [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)-Code steht der in der URL angegebene Wert als `req.params.id` zur Verfügung, und wir verwenden diesen Wert, um den entsprechenden Datensatz in der Datenbank abzurufen. Wir überprüfen auch, ob die Anfrage von einem authentifizierten Benutzer stammt, indem wir die `isAuthenticated`-Funktion aufrufen. Kritisch ist jedoch, dass wir nicht überprüfen, ob die ID des authentifizierten Benutzers mit der ID in der URL übereinstimmt, und dies ermöglicht einem authentifizierten Benutzer (dem Angreifer), eine Seite für einen anderen authentifizierten Benutzer (das Opfer) abzurufen.

```js example-bad
app.get("/user/id/:id", (req, res) => {
  const user = db.users.find(req.params.id);
  if (req.isAuthenticated()) {
    // Authentication is not enough!
    res.render("user", { user });
  }
});
```

Stattdessen sollten Sie Regeln implementieren, um den Zugriff auf Benutzerinformationen zu autorisieren. Zum Beispiel sollte die Benutzerseite nur gerendert werden, wenn die ID des angemeldeten Benutzers mit der angeforderten Benutzer-ID übereinstimmt. Andernfalls geben Sie eine HTTP {{HTTPStatus("401")}} `Unauthorized`-Antwort zurück.

```js
app.get("/user/id/:id", (req, res) => {
  const user = db.users.find(req.params.id);
  if (req.isAuthenticated() && req.session.userId === req.params.id) {
    res.render("user", { user });
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
});
```

### Dokumentenmanipulation

Ähnlich wie bei der URL-Manipulation kann der Dokumenteninhalt einer Seite von einem Angreifer durch das Ändern von Werten von {{HTMLElement("form")}}-Elementen, wie Radiobuttons, Kontrollkästchen oder (versteckten) {{HTMLElement("input")}}-Elementen in den Entwicklertools des Browsers, manipuliert werden.
Zum Beispiel überträgt Ihre Anwendung möglicherweise die Benutzer-ID nicht in der URL, sondern übergibt die Benutzer-ID in einem versteckten Formularelement:

```html
<form action="updateUser" method="POST">
  <input type="hidden" name="user_id" value="1234" />
  <button type="submit">Update profile</button>
</form>
```

Wenn keine serverseitige Zugriffskontrolle durchgeführt wird, kann der Angreifer den `user_id`-Wert im versteckten `<input>`-Element auf eine andere Benutzer-ID ändern und möglicherweise das Profil ohne Autorisierung ändern.

### Dateizugriff

Ein Spezialfall von IDOR-Angriffen ist der Zugriff auf Dateien oder Verzeichnisse, die nicht durch Zugriffskontrollen geschützt sind. Wenn Sie zum Beispiel einen Ordner für PDF-Dateiuploads bereitstellen und die Uploads fortlaufend benannt werden, kann ein Angreifer die Dateinamen erraten und sie alle herunterladen, wenn keine Zugriffskontrolle vorhanden ist. Potenziell können auch andere Dateien in ungeschützten Verzeichnissen, wie Serverkonfigurationsdateien, abgerufen werden, was zu zusätzlichen Schwachstellen führen könnte.

```http
https://example.org/static/pdfs/1.pdf
https://example.org/static/pdfs/2.pdf
```

## Abwehrmaßnahmen gegen IDOR

### Zugriffskontrolle für jedes Objekt

Die wichtigste Maßnahme gegen IDOR-Angriffe ist die Implementierung von serverseitigen Zugriffskontrollen für jedes Objekt, auf das Benutzer zugreifen möchten. Vergewissern Sie sich stets, dass der authentifizierte Benutzer das Recht hat, auf das angezielte Objekt zuzugreifen oder Handlungen darauf auszuführen.

### Komplexität der Identifikatoren

Stellen Sie sicher, dass Identifikatoren für Ressourcen nicht von einem Angreifer erraten werden können. Geben Sie keine persönlich identifizierbaren Informationen (PII) wie Benutzernamen oder E-Mail-Adressen in der URL preis. Verwenden Sie stattdessen ein eindeutiges, nicht erratbares Token, um den Benutzer zu repräsentieren. Sie können komplexere IDs als Primärschlüssel verwenden, wie {{Glossary("UUID", "UUIDs")}}, und es erschweren, gültige Werte zu erraten. Dies verringert jedoch nur die Wahrscheinlichkeit, gültige IDs zu erraten, und ersetzt nicht die Notwendigkeit einer ordnungsgemäßen Zugriffskontrolle.

## Zusammenfassung der Abwehrmaßnahmen

- Verifizieren Sie immer, dass der authentifizierte Benutzer autorisiert ist, auf das Objekt zuzugreifen oder es zu verändern.
- Vermeiden Sie, vorhersehbare, fortlaufende oder sensible Objekt-Identifikatoren (wie Benutzer-IDs oder E-Mail-Adressen) preiszugeben.
- Verwenden Sie komplexere IDs, die schwerer vorhersehbar sind (zum Beispiel UUIDs).

## Siehe auch

- [OWASP: Insecure Direct Object Reference Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html)

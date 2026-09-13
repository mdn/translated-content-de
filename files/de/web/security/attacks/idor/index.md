---
title: Unsichere direkte Objektreferenz (IDOR)
slug: Web/Security/Attacks/IDOR
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

**Unsichere direkte Objektreferenz (IDOR)** ist eine Schwachstelle, die es einem Angreifer ermöglicht, unzureichende Zugangskontrollen und unsichere Exposition von Objektidentifikatoren, wie Datenbankschlüssel oder Dateipfade, auszunutzen.

Websites möchten oft unterschiedlichen Benutzern unterschiedliche Inhalte bereitstellen: Ein Shopping-Website könnte beispielsweise jedem Benutzer ermöglichen, seine Kaufhistorie einzusehen. Websites können Benutzer durch {{Glossary("Authentication", "Authentifizierung")}} identifizieren, indem sie eine Methode wie ein Passwort oder einen Zugangsschlüssel verwenden. Oftmals wird, sobald eine Website einen Benutzer authentifiziert hat, ein Session-Cookie im Browser dieses Benutzers gesetzt: Wenn der Benutzer dann eine Anfrage stellt, weiß der Server, dass die Anfrage von diesem authentifizierten Benutzer stammt.

Zusätzlich zu der Überprüfung, dass die Anfrage von einem authentifizierten Benutzer stammt, muss der Server jedoch Zugriffskontrollen für die angeforderten Ressourcen implementieren: Das bedeutet, er muss überprüfen, ob der Benutzer berechtigt ist, auf die angeforderte spezifische Ressource zuzugreifen. Beispielsweise darf jedem authentifizierten Benutzer nur gestattet werden, seine eigene Kaufhistorie zu sehen.

Wenn ein Server keine Zugriffskontrolle für Ressourcen implementiert, könnte ein Angreifer, der auf der Website angemeldet ist, möglicherweise auf die Ressourcen eines anderen Benutzers zugreifen. Dies wird als ein Angriff auf eine unsichere direkte Objektreferenz (IDOR) bezeichnet.

## Beispiel-Szenarien

Der klassische IDOR-Angriff tritt auf, wenn der Server nur überprüft, dass der Benutzer authentifiziert ist, aber nicht, ob er berechtigt ist, auf eine Objektreferenz zuzugreifen. In einem typischen Ablauf:

1. Meldet sich der Angreifer als normaler Benutzer an.
2. Findet eine URL, ein Formularfeld oder eine Datei, die auf eine Benutzer- oder Ressourcen-ID verweist (z. B. 1234).
3. Ändert die ID in einen anderen Wert (z. B. 1233).
4. Erhält unbefugten Zugriff auf die Daten eines anderen Benutzers.

In den folgenden Abschnitten werden wir einige konkrete Beispiele für diesen Angriff untersuchen.

### URL-Manipulation

Ein häufiger Typ von IDOR-Angriff umfasst die Manipulation von direkten Objektreferenzen in der URL. Die "1234" in den folgenden URLs ist ein Identifikator für den Datensatz des Benutzers in der Datenbank des Servers. Wenn ein Angreifer diese Nummer in eine andere Nummer (zum Beispiel "1235") ändert und Zugriff auf die Informationen eines anderen Benutzers erhält, ist Ihre Anwendung anfällig für unsichere direkte Objektreferenz.

```http
# The attacker is logged in as user 1234
https://example.org/user/id/1234

# The attacker changes the id in the URL and gains access to a different user
https://example.org/user/id/1235
```

Im folgenden [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)-Code ist der im URL angegebene Wert als `req.params.id` verfügbar, und wir verwenden diesen Wert, um den entsprechenden Datensatz in der Datenbank abzurufen. Wir überprüfen auch, dass die Anfrage von einem authentifizierten Benutzer stammt, indem wir die Funktion `isAuthenticated` aufrufen. Kritisch ist jedoch, dass wir nicht überprüfen, ob die ID des authentifizierten Benutzers mit der ID in der URL übereinstimmt, und dies ermöglicht es einem authentifizierten Benutzer (dem Angreifer), eine Seite für einen anderen authentifizierten Benutzer (das Opfer) zu erhalten.

```js example-bad
app.get("/user/id/:id", (req, res) => {
  const user = db.users.find(req.params.id);
  if (req.isAuthenticated()) {
    // Authentication is not enough!
    res.render("user", { user });
  }
});
```

Stattdessen sollten Sie Regeln implementieren, um den Zugang zu Benutzerinformationen zu autorisieren. Beispielsweise sollte die Benutzerseite nur gerendert werden, wenn die angemeldete Benutzer-ID mit der angeforderten Benutzer-ID übereinstimmt. Andernfalls sollte eine HTTP {{HTTPStatus("401")}} `Unauthorized`-Antwort zurückgegeben werden.

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

Ähnlich wie bei der URL-Manipulation kann der Dokumentenkörper einer Seite von einem Angreifer manipuliert werden, indem Werte von {{HTMLElement("form")}}-Elementen, wie Optionsfeldern, Kontrollkästchen oder (versteckten) {{HTMLElement("input")}}-Elementen in den Entwicklertools des Browsers geändert werden. Beispielsweise stellt Ihre Anwendung vielleicht die Benutzer-ID nicht in der URL bereit, überträgt die Benutzer-ID jedoch stattdessen in einem versteckten Formularelement:

```html
<form action="updateUser" method="POST">
  <input type="hidden" name="user_id" value="1234" />
  <button type="submit">Update profile</button>
</form>
```

Wenn keine serverseitige Zugriffskontrolle durchgeführt wird, kann der Angreifer den `user_id`-Wert im versteckten `<input>`-Element in eine andere Benutzer-ID ändern und möglicherweise das Profil ohne Autorisierung modifizieren.

### Datei-Zugriff

Ein spezieller Fall von IDOR-Angriffen ist der Zugriff auf Dateien oder Verzeichnisse, die nicht durch Zugriffskontrollen geschützt sind. Wenn Sie zum Beispiel einen Ordner für den Upload von PDF-Dateien bereitstellen und die Uploads fortlaufend benannt werden, kann ein Angreifer die Dateinamen erraten und alle herunterladen, wenn keine Zugriffskontrolle vorhanden ist. Potenziell können auch andere Dateien in ungeschützten Verzeichnissen wie Server-Konfigurationsdateien erlangt werden, was zu zusätzlichen Schwachstellen führen kann.

```http
https://example.org/static/pdfs/1.pdf
https://example.org/static/pdfs/2.pdf
```

## Verteidigungen gegen IDOR

### Zugriffskontrolle für jedes Objekt

Die wichtigste Maßnahme zur Verhinderung von IDOR-Angriffen ist die Implementierung von serverseitigen Zugriffskontrollprüfungen für jedes Objekt, auf das Benutzer zuzugreifen versuchen. Verifizieren Sie immer, dass der authentifizierte Benutzer das Recht hat, auf das angezielte Objekt zuzugreifen oder Aktionen daran durchzuführen.

### Komplexität der Identifikatoren

Stellen Sie sicher, dass Identifikatoren für Ressourcen nicht von einem Angreifer erraten werden können. Vermeiden Sie es, persönlich identifizierbare Informationen (PII) wie Benutzernamen oder E-Mail-Adressen in der URL offenzulegen. Verwenden Sie stattdessen ein einzigartiges, nicht erratbares Token zur Identifizierung des Benutzers. Sie können komplexere IDs als Primärschlüssel verwenden, wie {{Glossary("UUID", "UUIDs")}}, und es schwieriger machen, gültige Werte zu erraten. Dies reduziert jedoch nur die Wahrscheinlichkeit, gültige IDs zu erraten, ersetzt jedoch nicht die Notwendigkeit einer ordnungsgemäßen Zugriffskontrolle.

## Verteidigungsscheckliste

- Verifizieren Sie immer, dass der authentifizierte Benutzer berechtigt ist, auf das Objekt zuzugreifen oder es zu modifizieren.
- Vermeiden Sie die Offenlegung von vorhersehbaren, sequentiellen oder sensiblen Objektidentifikatoren (wie Benutzer-IDs oder E-Mail-Adressen).
- Verwenden Sie komplexere IDs, die schwerer vorherzusagen sind (zum Beispiel UUIDs).

## Siehe auch

- [OWASP: Insecure Direct Object Reference Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html)

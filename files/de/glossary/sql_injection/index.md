---
title: SQL Injection
slug: Glossary/SQL_Injection
l10n:
  sourceCommit: b2af4eb16dd4c399ed81f67efd49777fa6ae9030
---

{{GlossarySidebar}}

SQL-Injection nutzt Webanwendungen aus, die die Benutzereingaben nicht validieren. Hacker können bösartige SQL-Befehle über die Webanwendung an eine Backend-Datenbank zur Ausführung übergeben.

SQL-Injection kann unberechtigten Zugriff auf eine Datenbank erhalten oder Informationen direkt aus der Datenbank abrufen. Viele Datenschutzverletzungen sind auf SQL-Injection zurückzuführen.

![Kreisdiagramm der häufigsten Schwachstellen: SQL-Injection ist für 50 % der Schwachstellen verantwortlich, Cross Site Scripting ist für 42 % verantwortlich, Quellcode-Offenlegung ist für 7 % verantwortlich.](sql_inj_xss.gif)

[Originalquelle](https://cdn.acunetix.com/wp_content/uploads/2010/09/sql_inj_xss.gif)

## Wie es funktioniert

![Screenshot des Anmeldeformulars mit Feldern für Benutzername und Passwort](updates_loginscreen.png)

Nach der Eingabe von Benutzername und Passwort funktionieren die SQL-Abfragen hinter der Benutzeroberfläche wie folgt:

```sql
"SELECT Count(*) FROM Users WHERE Username=' " + txt.User.Text+" ' AND Password=' "+ txt.Password.Text+" ' ";
```

Nun nehmen wir an, der Benutzer gibt den Benutzernamen: admin und das Passwort: passwd123 ein, so wird nach dem Klicken auf die Anmelde-Schaltfläche die SQL-Abfrage wie folgt ausgeführt:

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' passwd123 ' ";
```

Wenn die Anmeldeinformationen korrekt sind, darf sich der Benutzer anmelden, sodass es sich um einen sehr einfachen (und daher unsicheren) Mechanismus handelt. Hacker nutzen diese Unsicherheit aus, um unbefugten Zugriff zu erhalten.

Hacker verwenden einen einfachen String, genannt Magical String, zum Beispiel:

**Benutzername: _admin_**

**Passwort: _anything 'or'1'='1_**

Nach dem Klicken auf die Anmelde-Schaltfläche funktioniert die SQL-Abfrage wie folgt:

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' anything 'or'1'='1 ' ";
```

Sehen Sie sich den Passwortabschnitt der obigen Abfrage genauer an.

```plain
Password=' anything 'or'1'='1 '
```

Das Passwort ist nicht 'anything', daher führt password=anything zu FALSE, aber '1'='1' ist eine wahre Aussage und liefert daher einen wahren Wert zurück. Schließlich ist der Wert (FALSE ODER TRUE) aufgrund des OR-Operators TRUE, sodass die Authentifizierung erfolgreich umgangen wird. Nur aufgrund eines einfachen Strings (Magical String) ist die gesamte Datenbank kompromittiert.

## So verhindern Sie

Bevor die Abfragen für die Benutzeranmeldeinformationen ausgeführt werden, nehmen Sie einige Änderungen vor, wie z. B. die folgenden:

```sql
$id = $_GET['id']

(1) $id = Stripslashes($id)

(2) $id = mysql_real_escape_String($id)
```

Aufgrund von (1) wird jedes einzelne Anführungszeichen (') im Eingabestring durch doppelte Anführungszeichen (") ersetzt, und aufgrund von (2) wird vor jedem (') ein (/) hinzugefügt. Der überarbeitete Magical String scheitert daran, die Authentifizierung zu umgehen, und Ihre Datenbank bleibt sicher.

## Siehe auch

- [SQL-Injection](https://en.wikipedia.org/wiki/SQL_injection) auf Wikipedia
- [Erklärung zur SQL-Injection](https://owasp.org/www-community/attacks/SQL_Injection) auf OWASP (Open Web Application Security Project)

---
title: SQL-Injection
slug: Glossary/SQL_Injection
l10n:
  sourceCommit: 26fb7eaa7b398a35c2463fa15ab6ccfa46a9e06d
---

SQL-Injection nutzt Webanwendungen aus, die die Benutzereingaben nicht validieren. Hacker können bösartige SQL-Befehle über die Webanwendung an die Backend-Datenbank zur Ausführung übermitteln.

SQL-Injection kann unerlaubten Zugriff auf eine Datenbank erlangen oder Informationen direkt aus der Datenbank abrufen. Viele Datenlecks sind auf SQL-Injection zurückzuführen.

![Tortendiagramm der häufigsten Schwachstellen: SQL-Injection ist für 50% der Schwachstellen verantwortlich, Cross Site Scripting ist für 42% der Schwachstellen verantwortlich, Quellcode-Offenlegung ist für 7% der Schwachstellen verantwortlich.](sql_inj_xss.gif)

[Originalquelle](https://cdn.acunetix.com/wp_content/uploads/2010/09/sql_inj_xss.gif)

## Funktionsweise

![Screenshot des Login-Forms mit Feldern für Benutzername und Passwort](updates_loginscreen.png)

Nach Eingabe von Benutzername und Passwort arbeiten die SQL-Abfragen hinter der grafischen Benutzeroberfläche wie folgt:

```sql
"SELECT Count(*) FROM Users WHERE Username=' " + txt.User.Text+" ' AND Password=' "+ txt.Password.Text+" ' ";
```

Angenommen, der Benutzer gibt nun als Benutzernamen: admin und als Passwort: passwd123 ein. Nach dem Klick auf die Login-Schaltfläche wird die SQL-Abfrage wie folgt ausgeführt:

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' passwd123 ' ";
```

Wenn die Anmeldedaten korrekt sind, wird dem Benutzer die Anmeldung gestattet, was ein sehr einfaches (und daher unsicheres) System ist. Hacker nutzen diese Unsicherheit, um unberechtigten Zugriff zu erlangen.

Hacker nutzen einen einfachen String, genannt Magical String, zum Beispiel:

**Benutzername: _admin_**

**Passwort: _anything 'or'1'='1_**

Nach dem Klicken auf die Login-Schaltfläche funktioniert die SQL-Abfrage wie folgt:

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' anything 'or'1'='1 ' ";
```

Werfen Sie einen genaueren Blick auf den Passwortabschnitt der obigen Abfrage.

```plain
Password=' anything 'or'1'='1 '
```

Das Passwort ist nicht 'anything', daher führt password=anything zu FALSE, aber '1'='1' ist eine TRUE-Aussage und liefert daher einen TRUE-Wert. Schließlich, aufgrund des OR-Operators, ist der Wert (FALSE OR TRUE) TRUE, sodass die Authentifizierung erfolgreich umgangen wird. Nur wegen eines einfachen Strings (Magical String) wird die gesamte Datenbank kompromittiert.

## Wie man es verhindert

Bevor die Abfragen für die Benutzeranmeldeinformationen ausgeführt werden, können einige Änderungen vorgenommen werden, wie die folgenden:

```php
$id = $_GET["id"]

(1) $id = stripslashes($id)

(2) $id = mysql_real_escape_String($id)
```

Aufgrund von (1) wird jedes einfache Anführungszeichen (') im Eingabestring durch doppelte Anführungszeichen (") ersetzt, und aufgrund von (2) wird vor jedem (') ein (/) hinzugefügt. Der überarbeitete Magical String schlägt beim Umgehen der Authentifizierung fehl, und Ihre Datenbank bleibt sicher.

## Siehe auch

- [SQL-Injection](https://en.wikipedia.org/wiki/SQL_injection) auf Wikipedia
- [Erläuterung der SQL-Injection](https://owasp.org/www-community/attacks/SQL_Injection) auf OWASP (Open Web Application Security Project)

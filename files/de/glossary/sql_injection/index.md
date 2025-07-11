---
title: SQL Injection
slug: Glossary/SQL_Injection
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

SQL-Injection nutzt Webanwendungen aus, die es versäumen, Benutzereingaben zu validieren. Hacker können böswillig SQL-Befehle durch die Webanwendung zur Ausführung an eine Backend-Datenbank übergeben.

SQL-Injection kann unautorisierten Zugang zu einer Datenbank erlangen oder Informationen direkt aus der Datenbank abrufen. Viele Datenschutzverletzungen sind auf SQL-Injection zurückzuführen.

![Kreisdiagramm der häufigsten Schwachstellen: SQL-Injection ist für 50% der Schwachstellen verantwortlich, Cross Site Scripting für 42% und Quellecode-Offenlegung für 7%.](sql_inj_xss.gif)

[Originalquelle](https://cdn.acunetix.com/wp_content/uploads/2010/09/sql_inj_xss.gif)

## Funktionsweise

![Screenshot des Anmeldeformulars mit Feldern für Benutzername und Passwort](updates_loginscreen.png)

Nach Eingabe von Benutzername und Passwort arbeiten die SQL-Abfragen hinter der Benutzeroberfläche wie folgt:

```sql
"SELECT Count(*) FROM Users WHERE Username=' " + txt.User.Text+" ' AND Password=' "+ txt.Password.Text+" ' ";
```

Angenommen, der Benutzer gibt den Benutzernamen: admin und das Passwort: passwd123 ein, dann läuft nach dem Klick auf den Log-in-Button die SQL-Abfrage wie folgt:

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' passwd123 ' ";
```

Wenn die Anmeldedaten korrekt sind, darf der Benutzer sich anmelden. Es ist ein sehr einfaches (und daher unsicheres) Mechanismus. Hacker nutzen diese Unsicherheit aus, um unautorisierten Zugang zu erhalten.

Hacker verwenden einen einfachen String, genannt „Magical String“, beispielsweise:

**Benutzername: _admin_**

**Passwort: _anything 'or'1'='1_**

Nach dem Klick auf den Anmelde-Button funktioniert die SQL-Abfrage wie folgt:

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' anything 'or'1'='1 ' ";
```

Betrachten Sie den Passwortabschnitt der obigen Abfrage genauer.

```plain
Password=' anything 'or'1'='1 '
```

Das Passwort ist nicht „anything“, daher ergibt password=anything FALSE, aber '1'='1' ist eine TRUE-Anweisung und liefert daher einen TRUE-Wert zurück. Schließlich ist durch den OR-Operator der Wert (FALSE OR TRUE) TRUE, sodass die Authentifizierung erfolgreich umgangen wird. Nur aufgrund eines einfachen Strings (Magical String) ist die gesamte Datenbank kompromittiert.

## Wie man es verhindert

Bevor die Abfragen für die Benutzeranmeldedaten durchgeführt werden, nehmen Sie Änderungen vor wie die folgenden:

```php
$id = $_GET["id"]

(1) $id = stripslashes($id)

(2) $id = mysql_real_escape_String($id)
```

Dadurch wird (1) jedes einfache Anführungszeichen (') im Eingabestring durch doppelte Anführungszeichen (") ersetzt, und (2) vor jedem (') wird ein Slash (/) hinzugefügt. Der überarbeitete Magical String kann die Authentifizierung nicht mehr umgehen, und Ihre Datenbank bleibt sicher.

## Siehe auch

- [SQL-Injection](https://en.wikipedia.org/wiki/SQL_injection) auf Wikipedia
- [Erklärung von SQL-Injection](https://owasp.org/www-community/attacks/SQL_Injection) bei OWASP (Open Web Application Security Project)

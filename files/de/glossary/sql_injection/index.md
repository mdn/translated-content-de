---
title: SQL Injection
slug: Glossary/SQL_Injection
l10n:
  sourceCommit: b2af4eb16dd4c399ed81f67efd49777fa6ae9030
---

{{GlossarySidebar}}

SQL-Injection nutzt Webanwendungen aus, die es versäumen, Benutzereingaben zu validieren. Hacker können bösartige SQL-Befehle durch die Webanwendung zur Ausführung an eine Backend-Datenbank übermitteln.

SQL-Injection kann unbefugten Zugriff auf eine Datenbank erlangen oder Informationen direkt aus der Datenbank abrufen. Viele Datenlecks sind auf SQL-Injection zurückzuführen.

![Kreisdiagramm der häufigsten Schwachstellen: SQL Injection ist verantwortlich für 50% der Schwachstellen, Cross Site Scripting ist verantwortlich für 42% der Schwachstellen, Source Code Disclosure ist verantwortlich für 7% der Schwachstellen.](sql_inj_xss.gif)

[Originalquelle](https://cdn.acunetix.com/wp_content/uploads/2010/09/sql_inj_xss.gif)

## Wie es funktioniert

![Screenshot des Anmeldeformulars mit Feldern für Benutzername und Passwort](updates_loginscreen.png)

Nach der Eingabe von Benutzername und Passwort arbeiten die SQL-Abfragen hinter der Benutzeroberfläche wie folgt:

```sql
"SELECT Count(*) FROM Users WHERE Username=' " + txt.User.Text+" ' AND Password=' "+ txt.Password.Text+" ' ";
```

Nehmen Sie nun an, der Benutzer gibt den Benutzernamen: admin und Passwort: passwd123 ein, und nach dem Klicken auf die Schaltfläche Anmelden wird die SQL-Abfrage wie folgt ausgeführt:

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' passwd123 ' ";
```

Wenn die Anmeldedaten korrekt sind, darf sich der Benutzer einloggen, und es ist ein sehr einfaches (und daher unsicheres) Verfahren. Hacker nutzen diese Unsicherheit, um unbefugten Zugriff zu erlangen.

Hacker verwenden einen einfachen String namens Magical String, zum Beispiel:

**Benutzername: _admin_**

**Passwort: _irgendetwas 'oder'1'='1_**

Nach dem Klicken auf die Anmelde-Schaltfläche wird die SQL-Abfrage wie folgt verarbeitet:

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' anything 'or'1'='1 ' ";
```

Ein genauerer Blick auf den Passwortabschnitt der obigen Abfrage zeigt:

```plain
Password=' anything 'or'1'='1 '
```

Das Passwort ist nicht 'irgendetwas', daher ergibt password=irgendetwas FALSE, aber '1'='1' ist eine TRUE-Aussage und gibt daher einen TRUE-Wert zurück. Schließlich ergibt der ODER-Operator den Wert (FALSE ODER TRUE) als TRUE, sodass die Authentifizierung erfolgreich umgangen wird. Nur durch einen einfachen String (Magical String) wird die gesamte Datenbank kompromittiert.

## Wie zu verhindern

Bevor die Abfragen für die Benutzeranmeldedaten ausgeführt werden, nehmen Sie einige Änderungen vor, wie die folgenden:

```sql
$id = $_GET['id']

(1) $id = Stripslashes($id)

(2) $id = mysql_real_escape_String($id)
```

Aufgrund (1) wird jedes einzelne Anführungszeichen (') im Eingabestring durch doppelte Anführungszeichen (") ersetzt, und aufgrund (2) wird vor jedem (') ein (/) hinzugefügt. Der überarbeitete Magical String scheitert daran, die Authentifizierung zu umgehen, und Ihre Datenbank bleibt sicher.

## Siehe auch

- [SQL Injection](https://en.wikipedia.org/wiki/SQL_injection) auf Wikipedia
- [Erklärung von SQL Injection](https://owasp.org/www-community/attacks/SQL_Injection) bei OWASP (Open Web Application Security Project)

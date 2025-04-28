---
title: SQL Injection
slug: Glossary/SQL_Injection
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{GlossarySidebar}}

SQL-Injection nutzt Webanwendungen aus, die Benutzereingaben nicht überprüfen. Hacker können böswillig SQL-Befehle durch die Webanwendung zur Ausführung in einer Backend-Datenbank übermitteln.

SQL-Injection kann unberechtigten Zugriff auf eine Datenbank erlangen oder Informationen direkt aus der Datenbank abrufen. Viele Datenlecks sind auf SQL-Injection zurückzuführen.

![Kreisdiagramm der häufigsten Schwachstellen: SQL-Injection ist für 50 % der Schwachstellen verantwortlich, Cross Site Scripting für 42 % und Source Code Disclosure für 7 %.](sql_inj_xss.gif)

[Originalquelle](https://cdn.acunetix.com/wp_content/uploads/2010/09/sql_inj_xss.gif)

## Funktionsweise

![Screenshot des Anmeldeformulars mit Feldern für Benutzername und Passwort](updates_loginscreen.png)

Nach der Eingabe von Benutzername und Passwort funktionieren die SQL-Abfragen hinter der GUI wie folgt:

```sql
"SELECT Count(*) FROM Users WHERE Username=' " + txt.User.Text+" ' AND Password=' "+ txt.Password.Text+" ' ";
```

Angenommen, der Benutzer gibt als Benutzernamen admin und als Passwort passwd123 ein. Nach dem Klick auf den Login-Button wird die SQL-Abfrage wie folgt ausgeführt:

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' passwd123 ' ";
```

Wenn die Anmeldedaten korrekt sind, darf sich der Benutzer einloggen. Es ist also ein sehr einfaches (und deshalb unsicheres) Mechanismus. Hacker nutzen diese Unsicherheit, um unbefugten Zugriff zu erlangen.

Hacker verwenden einen einfachen String, der als Magical String bezeichnet wird, zum Beispiel:

**Benutzername: _admin_**

**Passwort: _anything 'or'1'='1_**

Nach dem Klick auf den Login-Button wird die SQL-Abfrage wie folgt funktionieren:

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' anything 'or'1'='1 ' ";
```

Werfen Sie einen genaueren Blick auf den Passwortabschnitt der obigen Abfrage.

```plain
Password=' anything 'or'1'='1 '
```

Das Passwort ist nicht 'anything', daher ergibt password=anything FALSE, aber '1'='1' ist eine wahre Aussage und gibt daher einen TRUE-Wert zurück. Schließlich ergibt der OR-Operator den Wert (FALSE OR TRUE) als TRUE, also wird die Authentifizierung erfolgreich umgangen. Nur durch einen einfachen String (Magical String) ist die gesamte Datenbank kompromittiert.

## Wie man es verhindert

Bevor die Abfragen für die Benutzerdaten ausgeführt werden, sollten Sie Änderungen wie die folgenden vornehmen:

```php
$id = $_GET["id"]

(1) $id = stripslashes($id)

(2) $id = mysql_real_escape_String($id)
```

Durch (1) wird jedes einzelne Anführungszeichen (') im Eingabestring mit Doppelanführungszeichen (") ersetzt, und durch (2) wird vor jedem (') ein (/) hinzugefügt. Der überarbeitete Magical String kann die Authentifizierung nicht umgehen, und Ihre Datenbank bleibt sicher.

## Siehe auch

- [SQL-Injection](https://en.wikipedia.org/wiki/SQL_injection) auf Wikipedia
- [Erklärung von SQL-Injection](https://owasp.org/www-community/attacks/SQL_Injection) bei OWASP (Open Web Application Security Project)

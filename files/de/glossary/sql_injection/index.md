---
title: SQL-Injection
slug: Glossary/SQL_Injection
l10n:
  sourceCommit: 13839b2979cc244034ffb1fe243240778b0cd23f
---

SQL-Injection nutzt Webanwendungen aus, die Benutzereingaben nicht validieren. Hacker können bösartig SQL-Befehle durch die Webanwendung zur Ausführung in einer Backend-Datenbank einschleusen.

SQL-Injection kann unerlaubten Zugriff auf eine Datenbank gewähren oder Informationen direkt aus der Datenbank abrufen. Viele Datenpannen sind auf SQL-Injection zurückzuführen.

![Kreisdiagramm der häufigsten Schwachstellen: SQL-Injection ist für 50% der Schwachstellen verantwortlich, Cross Site Scripting ist für 42% verantwortlich, Quellcode-Veröffentlichung macht 7% der Schwachstellen aus.](sql_inj_xss.gif)

[Originalquelle](https://cdn.acunetix.com/wp_content/uploads/2010/09/sql_inj_xss.gif)

## Funktionsweise

![Screenshot des Anmeldeformulars mit Feldern für Benutzername und Passwort](updates_loginscreen.png)

Nach Eingabe von Benutzername und Passwort arbeiten die SQL-Abfragen hinter der Benutzeroberfläche wie folgt:

```sql
"SELECT Count(*) FROM Users WHERE Username=' " + txt.User.Text+" ' AND Password=' "+ txt.Password.Text+" ' ";
```

Nehmen wir nun an, der Benutzer gibt den Benutzernamen: admin und das Passwort: passwd123 ein, dann wird nach dem Klick auf die Login-Schaltfläche die SQL-Abfrage wie folgt ausgeführt:

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' passwd123 ' ";
```

Wenn die Anmeldedaten korrekt sind, darf der Benutzer sich einloggen, was einen sehr einfachen (und daher unsicheren) Mechanismus darstellt. Hacker nutzen diese Unsicherheit, um unerlaubten Zugriff zu erlangen.

Hacker verwenden eine einfache Zeichenfolge, die als Magische Zeichenfolge bezeichnet wird, zum Beispiel:

**Benutzername: _admin_**

**Passwort: _anything 'or'1'='1_**

Nach dem Klicken auf die Login-Schaltfläche funktioniert die SQL-Abfrage wie folgt:

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' anything 'or'1'='1 ' ";
```

Betrachten Sie den Passwortabschnitt der oben genannten Abfrage genauer.

```plain
Password=' anything 'or'1'='1 '
```

Das Passwort ist nicht 'anything', daher ergibt password=anything FALSE, aber '1'='1' ist eine TRUE-Aussage und ergibt somit einen TRUE-Wert. Schließlich wird durch den OR-Operator der Wert (FALSE OR TRUE) zu TRUE, sodass die Authentifizierung erfolgreich umgangen wird. Nur aufgrund einer einfachen Zeichenfolge (Magische Zeichenfolge) wird die gesamte Datenbank kompromittiert.

## So schützen Sie sich

Bevor Sie die Abfragen für die Benutzer-Anmeldeinformationen ausführen, nehmen Sie Änderungen wie die folgenden vor:

```php
$id = $_GET["id"]

(1) $id = stripslashes($id)

(2) $id = mysql_real_escape_String($id)
```

Daher wird durch (1) jedes einzelne Anführungszeichen (') in der Eingabezeichenfolge durch doppelte Anführungszeichen (") ersetzt, und durch (2) wird vor jedem (') ein Schrägstrich (/) hinzugefügt. Die überarbeitete magische Zeichenfolge kann die Authentifizierung nicht umgehen, und Ihre Datenbank bleibt sicher.

## Siehe auch

- [SQL-Injection](https://en.wikipedia.org/wiki/SQL_injection) auf Wikipedia
- [Erläuterung der SQL-Injection](https://owasp.org/www-community/attacks/SQL_Injection) auf OWASP (Open Web Application Security Project)

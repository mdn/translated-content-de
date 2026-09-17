---
title: SQL-Injection
slug: Glossary/SQL_Injection
l10n:
  sourceCommit: 13ef67a4ffbdb929415dfa1b3d65ab1aa9ebe5da
---

SQL-Injection nutzt Web-Apps aus, die Benutzereingaben nicht validieren. Hacker können SQL-Befehle böswillig über die Web-App zur Ausführung an eine Backend-Datenbank übergeben.

SQL-Injection kann unbefugten Zugriff auf eine Datenbank ermöglichen oder Informationen direkt aus der Datenbank abrufen. Viele Datenschutzverletzungen sind auf SQL-Injection zurückzuführen.

![Kreisdiagramm der häufigsten Sicherheitslücken: SQL-Injection ist für 50 % der Sicherheitslücken verantwortlich, Cross-Site-Scripting für 42 % und die Offenlegung von Quellcode für 7 %.](sql_inj_xss.gif)

[Originalquelle](https://cdn.acunetix.com/wp_content/uploads/2010/09/sql_inj_xss.gif)

## Funktionsweise

![Screenshot des Anmeldeformulars mit Feldern für Benutzername und Passwort](updates_loginscreen.png)

Nach der Eingabe von Benutzername und Passwort funktionieren die SQL-Abfragen hinter der GUI wie folgt:

```sql
"SELECT Count(*) FROM Users WHERE Username=' " + txt.User.Text+" ' AND Password=' "+ txt.Password.Text+" ' ";
```

Nehmen wir nun an, der Benutzer gibt als Benutzername `admin` und als Passwort `passwd123` ein. Nach dem Klick auf die Schaltfläche „Login“ wird die SQL-Abfrage wie folgt ausgeführt:

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' passwd123 ' ";
```

Wenn die Anmeldedaten korrekt sind, darf sich der Benutzer anmelden. Dies ist also ein sehr einfacher (und daher unsicherer) Mechanismus. Hacker nutzen diese Unsicherheit aus, um unbefugten Zugriff zu erlangen.

Hacker verwenden eine einfache Zeichenkette, die als Magical String bezeichnet wird, zum Beispiel:

**Benutzername: _admin_**

**Passwort: _anything 'or'1'='1_**

Nach dem Klick auf die Anmeldeschaltfläche funktioniert die SQL-Abfrage wie folgt:

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' anything 'or'1'='1 ' ";
```

Betrachten Sie den Passwortabschnitt der obigen Abfrage genauer.

```plain
Password=' anything 'or'1'='1 '
```

Das Passwort ist nicht `anything`, daher ergibt `password=anything` den Wert FALSE, aber `'1'='1'` ist eine TRUE-Aussage und gibt daher einen TRUE-Wert zurück. Aufgrund des OR-Operators ist der Wert (FALSE OR TRUE) letztlich TRUE, sodass die Authentifizierung erfolgreich umgangen wird. Allein durch eine einfache Zeichenkette (Magical String) wird die gesamte Datenbank kompromittiert.

## Vermeidung

Nehmen Sie vor der Ausführung der Abfragen für die Benutzeranmeldedaten Änderungen wie die folgenden vor:

```php
$id = $_GET["id"]

(1) $id = stripslashes($id)

(2) $id = mysql_real_escape_String($id)
```

Aufgrund von (1) wird jedes einfache Anführungszeichen (`'`) in der Eingabezeichenkette durch doppelte Anführungszeichen (`"`) ersetzt, und aufgrund von (2) wird vor jedem (`'`) ein (`/`) hinzugefügt. Die überarbeitete Magical String kann die Authentifizierung nicht umgehen, und Ihre Datenbank bleibt sicher.

## Siehe auch

- [SQL-Injection](https://en.wikipedia.org/wiki/SQL_injection) auf Wikipedia
- [Erklärung von SQL-Injection](https://community.owasp.org/attacks/SQL_Injection) bei OWASP (Open Web Application Security Project)

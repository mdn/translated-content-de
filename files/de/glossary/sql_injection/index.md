---
title: SQL-Injektion
slug: Glossary/SQL_Injection
l10n:
  sourceCommit: b2af4eb16dd4c399ed81f67efd49777fa6ae9030
---

{{GlossarySidebar}}

SQL-Injektion nutzt Webanwendungen aus, die Benutzereingaben nicht validieren. Hacker können bösartige SQL-Befehle über die Webanwendung zur Ausführung durch eine Backend-Datenbank einschleusen.

SQL-Injektion kann unbefugten Zugriff auf eine Datenbank erlangen oder Informationen direkt aus der Datenbank abrufen. Viele Datenpannen sind auf SQL-Injektionen zurückzuführen.

![Kreisdiagramm der häufigsten Schwachstellen: SQL-Injektion ist verantwortlich für 50% der Schwachstellen, Cross-Site-Scripting für 42% der Schwachstellen, Source-Code-Offenlegung für 7% der Schwachstellen.](sql_inj_xss.gif)

[Originalquelle](https://cdn.acunetix.com/wp_content/uploads/2010/09/sql_inj_xss.gif)

## Wie es funktioniert

![Screenshot des Anmeldeformulars mit Feldern für Benutzername und Passwort](updates_loginscreen.png)

Nachdem der Benutzername und das Passwort eingegeben wurden, arbeiten die SQL-Abfragen hinter der GUI wie folgt:

```sql
"SELECT Count(*) FROM Users WHERE Username=' " + txt.User.Text+" ' AND Password=' "+ txt.Password.Text+" ' ";
```

Nun nehmen Sie an, der Benutzer gibt den Benutzernamen: admin und das Passwort: passwd123 ein, also wird nach dem Klicken auf die Schaltfläche Anmelden die SQL-Abfrage wie folgt ausgeführt:

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' passwd123 ' ";
```

Wenn die Anmeldedaten korrekt sind, wird dem Benutzer der Zugang gewährt. Dies ist ein sehr einfaches (und daher unsicheres) Mechanismus. Hacker nutzen diese Unsicherheit, um unbefugten Zugriff zu erlangen.

Hacker verwenden eine einfache Zeichenfolge, eine sogenannte magische Zeichenfolge, zum Beispiel:

**Benutzername: _admin_**

**Passwort: _anything 'or'1'='1_**

Nach dem Klicken auf die Anmeldeschaltfläche wird die SQL-Abfrage wie folgt funktionieren:

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' anything 'or'1'='1 ' ";
```

Sehen Sie sich nur den Passwortabschnitt der obigen Abfrage genauer an.

```plain
Password=' anything 'or'1'='1 '
```

Das Passwort ist nicht 'anything', daher ergibt password=anything FALSE, aber '1'='1' ist eine wahre Aussage und ergibt somit einen TRUE-Wert. Schließlich, aufgrund des OR-Operators, ist der Wert (FALSE OR TRUE) TRUE, sodass die Authentifizierung erfolgreich umgangen wird. Nur aufgrund einer einfachen Zeichenfolge (magische Zeichenfolge) wird die gesamte Datenbank kompromittiert.

## Wie man es verhindert

Vor der Ausführung der Abfragen für die Benutzeranmeldedaten sollten einige Änderungen wie die folgenden vorgenommen werden:

```sql
$id = $_GET['id']

(1) $id = Stripslashes($id)

(2) $id = mysql_real_escape_String($id)
```

Aufgrund von (1) wird jedes einzelne Anführungszeichen (') in der Eingabezeichenfolge durch doppelte Anführungszeichen (") ersetzt, und aufgrund von (2) wird vor jedem (') ein (/) hinzugefügt. Die überarbeitete magische Zeichenfolge schlägt bei der Umgehung der Authentifizierung fehl und Ihre Datenbank bleibt sicher.

## Siehe auch

- [SQL-Injektion](https://en.wikipedia.org/wiki/SQL_injection) auf Wikipedia
- [Erklärung der SQL-Injektion](https://owasp.org/www-community/attacks/SQL_Injection) auf OWASP (Open Web Application Security Project)

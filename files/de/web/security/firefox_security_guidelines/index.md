---
title: Sicherheitsrichtlinien für Firefox
slug: Web/Security/Firefox_Security_Guidelines
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

## Zweck

Dieses Dokument skizziert eine Reihe von Sicherheitsrichtlinien, die im Allgemeinen für alle Client-Anwendungen wie Firefox und Thunderbird gelten.

## Grundsätze des sicheren Programmierens

Stellen Sie sicher, dass die Anwendung den [OWASP Secure Coding Principles](https://wiki.owasp.org/index.php/Secure_Coding_Principles) folgt:

1. Minimieren Sie die Angriffsfläche
2. Etablieren Sie sichere Standards
3. Prinzip der geringsten Privilegien
4. Prinzip der Verteidigung in der Tiefe
5. Sicheres Scheitern
6. Vertrauen Sie keinen Diensten
7. Halten Sie Sicherheit einfach
8. Beheben Sie Sicherheitsprobleme korrekt

## Eingabevalidierung

1. Akzeptiert die Anwendung Benutzereingaben?

   1. Überprüfen Sie eine Stichprobe von Eingabestandorten, um sicherzustellen, dass beim Akzeptieren von Benutzerdaten vernünftige Höchstgrenzen festgelegt sind
   2. Überprüfen Sie eine Stichprobe von Eingabestandorten, um sicherzustellen, dass die Anwendung nur eine definierte Menge akzeptabler Zeichen zulässt
   3. Stellen Sie sicher, dass eine Positivliste anstelle einer Negativliste verwendet wird

2. Akzeptiert die Anwendung Benutzereingaben, die auf irgendeine Weise angezeigt werden?

   1. Überprüfen Sie eine Stichprobe von Eingabe- und Ausgabestandorten, um sicherzustellen, dass vom Benutzer bereitgestellter Inhalt in der Antwort angemessen kodiert ist

## Chrome JS - Gefährliche Funktionen

Werden eine der folgenden Funktionen verwendet?

Falls ja, stellen Sie sicher, dass sie sicher sind und dass keine besseren Alternativen verfügbar sind.

| Name                     | Risikostufe | Problem                                                            | Lösung                                                |
| ------------------------ | ----------- | ------------------------------------------------------------------ | ----------------------------------------------------- |
| eval                     | Sehr hoch   | Ruft den JavaScript-Parser auf - gefährlich, wenn mit unzuverlässigen Eingaben verwendet | Vermeiden Sie eval, wenn möglich.                     |
| setTimeout(string, time) | Sehr hoch   | Wirkt wie eval                                                     | Verwenden Sie setTimeout(function, time, param1, param2, …) |

## C++ - Gefährliche Funktionen

Werden eine der folgenden Funktionen verwendet?

Falls ja, stellen Sie sicher, dass sie sicher sind und dass keine besseren Alternativen verfügbar sind.

| Name                                                  | Risikostufe | Problem                                            | Lösung                                                                                                                                                                                                                                                                        |
| ----------------------------------------------------- | ----------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| gets                                                  | Sehr hoch   | Keine Grenzüberprüfung                             | Verwenden Sie nicht gets. Verwenden Sie fgets stattdessen.                                                                                                                                                                                                                     |
| strcpy                                                | Sehr hoch   | Keine Grenzüberprüfung                             | strcpy ist nur sicher, wenn der Quellstring eine Konstante ist und das Ziel groß genug ist, um ihn aufzunehmen. Andernfalls verwenden Sie strncpy.                                                                                                                            |
| sprintf                                               | Sehr hoch   | Keine Grenzüberprüfung, Format-String-Angriffe     | sprintf ist sehr schwer sicher zu verwenden. Verwenden Sie snprintf stattdessen.                                                                                                                                                                                               |
| scanf, sscanf                                         | Hoch        | Möglicherweise keine Grenzüberprüfung, Format-String-Angriffe | Stellen Sie sicher, dass alle %-Direktiven den entsprechenden Argumenttypen entsprechen. Verwenden Sie keine '%s'-Direktiven ohne Grenzüberprüfung. Verwenden Sie '%xs', wobei x die Puffergröße des entsprechenden Arguments ist. Verwenden Sie keine unzuverlässigen, nicht validierten Daten im Format-String.                                       |
| strcat                                                | Hoch        | Keine Grenzüberprüfung                             | Falls die Eingabegrößen nicht gut bekannt und festgelegt sind, verwenden Sie strncat stattdessen.                                                                                                                                                                              |
| printf, fprintf, snprintf, vfprintf, vsprintf, syslog | Hoch        | Format-String-Angriffe                             | Verwenden Sie keine unzuverlässigen, nicht validierten Daten im Format-String. Wenn der Format-String durch Webinhalte oder Benutzereingaben beeinflusst werden kann, validieren Sie ihn auf die korrekte Anzahl und den Typ der %-Direktiven, bevor Sie diese Funktionen aufrufen. Stellen Sie sicher, dass die Größenargumente für das Ziel korrekt sind. |
| strncpy, fgets, strncat                               | Niedrig     | Möglicherweise keine Null-Terminierung             | Terminieren Sie stets explizit den Zielpuffer mit Null. Stellen Sie sicher, dass das Größenargument korrekt ist. Lassen Sie im Zielpuffer Platz, um das Nullzeichen hinzuzufügen!                                                                                              |

## URLs

1. Verwendet die Anwendung unzuverlässige Daten zur Erstellung von URLs?

   - Stellen Sie sicher, dass alle solchen Daten vor der Verwendung angemessen bereinigt und kodiert werden.
   - Stellen Sie sicher, dass alle Daten, die von diesen URLs abgerufen werden, vor der Verwendung oder Speicherung überprüft werden.

2. Folgt die Anwendung Umleitungen?

   - Stellen Sie sicher, dass Sicherheitsprüfungen sowohl bei Umleitungen als auch bei der ursprünglichen Anfrage-URI durchgeführt werden.

## Sicherheitskontrollen

1. Implementiert die Anwendung geeignete Berechtigungsprüfungen?

   - Stellen Sie sicher, dass die richtigen APIs verwendet werden, wo verfügbar (z.B. shouldLoad, etc.)
   - Stellen Sie sicher, dass die Anwendung sicher fehlschlägt.

## Zugriff auf entfernte Systeme

1. Greift die Anwendung auf entfernte Systeme zu?

- Stellen Sie sicher, dass TLS verwendet wird, es sei denn, es gibt einen _sehr_ guten Grund, dies nicht zu tun.
- Stellen Sie sicher, dass keine Benutzerinformationen ohne Zustimmung des Benutzers übertragen werden.

## Informationsspeicherung

1. Dateispeicherung

   1. Stellen Sie sicher, dass die Anwendung überprüft, dass alle erstellten Dateien sich unter erlaubten Pfaden befinden
   2. Werden Dateinamen aus unzuverlässigen Daten generiert?

      - Stellen Sie sicher, dass die Daten angemessen kodiert werden

   3. Überprüfen Sie, dass Dateien von einem akzeptablen Typ sind
   4. Überprüfen Sie, dass Dateien keine vernünftigen Größenlimits überschreiten können

2. Datenbankspeicherung

   1. Stellen Sie sicher, dass alle unzuverlässigen Informationen, die an die Datenbank gesendet werden, angemessen bereinigt werden
   2. Verwenden Sie, wo möglich, typsichere Parametrisierung, um Injektionsangriffe zu verhindern

3. Sensible Informationen

   1. Stellen Sie sicher, dass sicherheitssensible oder persönliche Informationen angemessen geschützt sind (siehe Verschlüsselungsabschnitt)
   2. Besondere Vorsicht ist bei Anmeldeinformationen (Passwörter, etc.) geboten - Wenn Sie mit Informationen dieser Art arbeiten und nicht sicher sind, was zu tun ist, lohnt es sich immer, nachzufragen

4. Protokollierung

   1. Vergessen Sie nicht, dass die obigen Regeln auch für Protokolle gelten, ebenso wie für Ihre üblichen Anwendungsdaten

## Verschlüsselung

1. Verwendet die Anwendung irgendeine Form von Verschlüsselung?
2. Werden die verwendeten Algorithmen als anerkannte Standards angesehen?

## Dienstverweigerung

1. Stellen Sie sicher, dass die Anwendung Schutz gegen Erschöpfung der:

   1. Systemspeicher
   2. Speicherplatz

## Sicherheitswarnungen

1. Präsentiert die Anwendung dem Benutzer irgendwelche Sicherheitswarnungen?
2. Sind diese klar verständlich und angemessen?
3. Kann unzuverlässige Daten die Bedeutung von Nachrichten an den Benutzer ändern?

   - Kann Benutzereingaben die Bedeutung von Nachrichten ändern?
   - Kann Benutzereingaben Systemnachrichten außerhalb des sichtbaren Bildschirms erzwingen?
   - Können Benutzereingaben Sonderzeichen enthalten, die die Bedeutung von Nachrichten ändern können (z. B. Unicode-Rechts-nach-Links-Override U+202E)

4. Kann ein Angreifer das Timing von Dialogen nutzen, um den Benutzer dazu zu verleiten, auf etwas zu klicken, was er nicht beabsichtigt hat?

## Offenlegung von Informationen

1. Gibt die Anwendung Informationen preis, die den Benutzer gefährden könnten?
2. Gibt die Anwendung Informationen preis, die sie nicht benötigt?
3. Wird etwas offengelegt, das den Benutzer überraschen oder verärgern könnte?

## Front-End

1. Werden sichere Mechanismen verwendet, um XUL- und HTML-UI-Elemente zu erstellen?

   - z.B. verwenden Sie createTextNode anstelle von innerHTML oder ähnlichem

2. Erstellt die Anwendung eigene Docshells (Tabs, iframes)?

   - Stellen Sie sicher, dass Sie explizit den Typ dieser angeben, z.B. iframe.setAttribute("type", "content")

## Referenzen

- [Web Security Verification](https://wiki.mozilla.org/WebAppSec/Web_Security_Verification)
- [Mozilla Security Review and Best Practices](https://www-archive.mozilla.org/projects/security/components/reviewguide.html)
- [Security tips for Mozilla and extension developers](https://www.squarefree.com/securitytips/mozilla-developers.html)

---
title: Firefox Sicherheitsrichtlinien
slug: Web/Security/Firefox_Security_Guidelines
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

## Zweck

Dieses Dokument skizziert eine Reihe von Sicherheitsrichtlinien, die im Allgemeinen für alle Client-Anwendungen wie Firefox und Thunderbird gelten.

## Prinzipien der sicheren Programmierung

Stellen Sie sicher, dass die Anwendung den [OWASP Secure Coding Principles](https://wiki.owasp.org/index.php/Secure_Coding_Principles) folgt:

1. Minimieren Sie die Angriffsfläche
2. Etablieren Sie sichere Grundeinstellungen
3. Prinzip der minimalen Rechte
4. Prinzip der Verteidigung in der Tiefe
5. Sicheres Scheitern
6. Vertrauen Sie keinen Diensten
7. Halten Sie Sicherheit einfach
8. Beheben Sie Sicherheitsprobleme korrekt

## Eingabeüberprüfung

1. Akzeptiert die Anwendung Benutzereingaben?

   1. Überprüfen Sie eine Stichprobe von Eingabeorten, um sicherzustellen, dass beim Akzeptieren von Benutzerdaten vernünftige Maximalwerte festgelegt sind
   2. Überprüfen Sie eine Stichprobe von Eingabeorten, um sicherzustellen, dass die Anwendung nur eine definierte Menge an zulässigen Zeichen erlaubt
   3. Stellen Sie sicher, dass Whitelisting anstelle von Blacklisting verwendet wird

2. Akzeptiert die Anwendung Benutzereingaben, die in irgendeiner Weise angezeigt werden?

   1. Überprüfen Sie eine Stichprobe von Ein- und Ausgabeorten, um sicherzustellen, dass vom Benutzer bereitgestellte Inhalte in der Antwort korrekt kodiert sind

## Chrome JS - Gefährliche Funktionen

Werden die folgenden Funktionen verwendet?

Falls ja, stellen Sie sicher, dass sie sicher sind und dass keine besseren Alternativen verfügbar sind.

| Name                     | Risikostufe | Problem                                                                                           | Lösung                                                      |
| ------------------------ | ----------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| eval                     | Sehr hoch   | Ruft den JavaScript-Parser auf - gefährlich, wenn mit nicht vertrauenswürdigen Eingaben verwendet | Vermeiden Sie eval, wenn möglich.                           |
| setTimeout(string, time) | Sehr hoch   | Funktioniert wie eval                                                                             | Verwenden Sie setTimeout(function, time, param1, param2, …) |

## C++ - Gefährliche Funktionen

Werden die folgenden Funktionen verwendet?

Falls ja, stellen Sie sicher, dass sie sicher sind und dass keine besseren Alternativen verfügbar sind.

| Name                                                  | Risikostufe | Problem                                                  | Lösung                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------------- | ----------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| gets                                                  | Sehr hoch   | Keine Grenzprüfung                                       | Verwenden Sie gets nicht. Verwenden Sie stattdessen fgets.                                                                                                                                                                                                                                                                                            |
| strcpy                                                | Sehr hoch   | Keine Grenzprüfung                                       | strcpy ist nur sicher, wenn der Quellstring eine Konstante ist und das Ziel groß genug ist, um ihn aufzunehmen. Andernfalls verwenden Sie strncpy.                                                                                                                                                                                                    |
| sprintf                                               | Sehr hoch   | Keine Grenzprüfung, Formatstring-Angriffe                | sprintf ist sehr schwer sicher zu verwenden. Verwenden Sie stattdessen snprintf.                                                                                                                                                                                                                                                                      |
| scanf, sscanf                                         | Hoch        | Möglicherweise keine Grenzprüfung, Formatstring-Angriffe | Stellen Sie sicher, dass alle %-Direktiven mit den entsprechenden Argumenttypen übereinstimmen. Verwenden Sie keine '%s'-Direktiven ohne Grenzprüfung. Verwenden Sie '%xs', wobei x die Puffergröße des entsprechenden Arguments ist. Verwenden Sie keine nicht vertrauenswürdigen, nicht validierten Daten im Formatstring.                          |
| strcat                                                | Hoch        | Keine Grenzprüfung                                       | Verwenden Sie strncat, wenn die Eingabegrößen nicht gut bekannt und fest sind.                                                                                                                                                                                                                                                                        |
| printf, fprintf, snprintf, vfprintf, vsprintf, syslog | Hoch        | Formatstring-Angriffe                                    | Verwenden Sie keine nicht vertrauenswürdigen, nicht validierten Daten im Formatstring. Wenn der Formatstring von Web-Inhalten oder Benutzereingaben beeinflusst werden kann, validieren Sie ihn auf die richtige Anzahl und Art der %-Direktiven, bevor Sie diese Funktionen aufrufen. Stellen Sie sicher, dass die Zielgrößenargumente korrekt sind. |
| strncpy, fgets, strncat                               | Gering      | Möglicherweise keine Nullterminierung                    | Stellen Sie immer sicher, dass der Zielpuffer ausdrücklich nullterminiert wird. Stellen Sie sicher, dass das Größenargument korrekt ist. Achten Sie darauf, im Zielpuffer Platz für das Hinzufügen des Nullzeichens zu lassen!                                                                                                                        |

## URLs

1. Verwendet die Anwendung nicht vertrauenswürdige Daten zur Erstellung von URLs?

   - Stellen Sie sicher, dass solche Daten vor der Verwendung angemessen bereinigt und kodiert werden.
   - Stellen Sie sicher, dass alle aus diesen URLs gewonnenen Daten vor der Verwendung oder Speicherung überprüft werden.

2. Befolgt die Anwendung Umleitungen?

   - Stellen Sie sicher, dass Sicherheitsprüfungen sowohl bei Umleitungen als auch bei der ursprünglichen Anforderungs-URI durchgeführt werden.

## Sicherheitskontrollen

1. Implementiert die Anwendung geeignete Berechtigungsprüfungen?

   - Stellen Sie sicher, dass die richtigen APIs verwendet werden, wo verfügbar (z. B. shouldLoad, etc.)
   - Stellen Sie sicher, dass die Anwendung sicher fehlschlägt.

## Zugriff auf entfernte Systeme

1. Greift die Anwendung auf entfernte Systeme zu?

- Stellen Sie sicher, dass TLS verwendet wird, es sei denn, es gibt einen _sehr_ guten Grund, dies nicht zu tun.
- Stellen Sie sicher, dass keine Benutzerinformationen ohne die Zustimmung des Benutzers übertragen werden.

## Informationsspeicherung

1. Dateispeicherung

   1. Stellen Sie sicher, dass die Anwendung überprüft, dass alle erstellten Dateien sich unter erlaubten Pfaden befinden
   2. Werden Dateinamen aus nicht vertrauenswürdigen Daten generiert?

      - Stellen Sie sicher, dass die Daten angemessen kodiert sind

   3. Überprüfen Sie, ob Dateien einen akzeptablen Typ haben
   4. Überprüfen Sie, dass Dateien keine vernünftigen Größenlimits überschreiten können

2. Datenbankspeicherung

   1. Stellen Sie sicher, dass alle nicht vertrauenswürdigen Informationen, die an die Datenbank gesendet werden, angemessen bereinigt sind
   2. Verwenden Sie, wo möglich, typsichere Parametrisierung, um Injektionsangriffe zu verhindern

3. Sensible Informationen

   1. Stellen Sie sicher, dass alle sicherheitsrelevanten oder persönlichen Informationen ausreichend geschützt sind (siehe Abschnitt Verschlüsselung)
   2. Besondere Vorsicht muss bei Anmeldedaten (Passwörter, etc.) walten - Wenn Sie mit solchen Informationen arbeiten und unsicher sind, was zu tun ist, lohnt es sich immer zu fragen

4. Protokollierung

   1. Vergessen Sie nicht, dass die obigen Regeln auch für Protokolle sowie Ihre normalen Anwendungsdaten gelten

## Verschlüsselung

1. Verwendet die Anwendung irgendeine Form der Verschlüsselung?
2. Werden anerkannte Standards für die Algorithmen verwendet?

## Denial of Service

1. Stellen Sie sicher, dass die Anwendung Schutz vor Erschöpfung bietet von:

   1. Systemspeicher
   2. Speicherplatz

## Sicherheitswarnungen

1. Präsentiert die Anwendung dem Benutzer irgendwelche Sicherheitswarnungen?
2. Sind sie klar verständlich und angemessen?
3. Kann nicht vertrauenswürdige Daten das Verständnis der Meldungen für den Benutzer ändern?

   - Kann Benutzereingabe die Bedeutung von Meldungen ändern?
   - Kann Benutzereingabe Systemmeldungen vom sichtbaren Bildschirm verdrängen?
   - Kann Benutzereingabe spezielle Zeichen enthalten, die die Bedeutung von Meldungen ändern können (z.B. Unicode-Rechts-nach-Links-Überschreibung U+202E)

4. Kann ein Angreifer das Timing der Dialoge verwenden, um den Benutzer zu täuschen, auf etwas zu klicken, was er nicht beabsichtigt hat?

## Informationsoffenlegung

1. Offenbart die Anwendung Informationen, die den Benutzer kompromittieren könnten?
2. Offenbart die Anwendung Informationen, die sie nicht offenlegen muss?
3. Offenbart die Anwendung etwas, das den Benutzer überraschen oder verärgern könnte?

## Frontend

1. Werden sichere Mechanismen verwendet, um XUL- und HTML-Benutzeroberflächenelemente zu erstellen?

   - z.B. verwenden Sie createTextNode anstelle von innerHTML oder Ähnlichem

2. Erstellt die Anwendung eigene Docshells (Tabs, iframes)?

   - Stellen Sie sicher, dass Sie ausdrücklich den Typ dieser angeben, z.B. iframe.setAttribute("type", "content")

## Referenzen

- [Web Security Verification](https://wiki.mozilla.org/WebAppSec/Web_Security_Verification)
- [Mozilla Security Review and Best Practices](https://www-archive.mozilla.org/projects/security/components/reviewguide.html)
- [Sicherheitstipps für Mozilla- und Erweiterungsentwickler](https://www.squarefree.com/securitytips/mozilla-developers.html)

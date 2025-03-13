---
title: Verwandte Websitemengen
slug: Web/API/Storage_Access_API/Related_website_sets
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("Storage Access API")}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browser-Anbietern abgelehnt. Siehe den Abschnitt [Standards-Positionen](#standards-positionen) unten für Details zur Ablehnung.

Verwandte Websitemengen sind ein Mechanismus zur Definition einer Menge verwandter Websites, die vertrauenswürdige Inhalte teilen. Dadurch können Browser diesen Websites standardmäßig Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [nicht partitionierten Zustand](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) gewähren, wenn sie in anderen Mitgliedern der Menge eingebettete Inhalte haben, ohne dass Benutzer Zugriff auf die [Storage Access API](/de/docs/Web/API/Storage_Access_API) über eine Berechtigungsaufforderung gewähren müssen.

## Konzepte und Anwendung

Betrachten wir Situationen, in denen Sie eine Reihe verwandter Websites mit unterschiedlichen Domain-Namen haben und Sie für deren Inhalte Zugriff auf Drittanbieter-Cookies und nicht partitionierten Zustand gewähren möchten, wenn sie in einem Drittanbieter-Kontext innerhalb anderer verwandter Websites geladen werden (d.h. eingebettet in ein {{htmlelement("iframe")}}). Typische Anwendungsfälle sind:

- App-Sites: Eine einzelne Anwendung kann über mehrere Websites bereitgestellt werden, um Benutzern eine nahtlose Navigation zwischen diesen in einer einzigen Sitzung zu ermöglichen.
- Marken-Websites: Eine Sammlung von Markenressourcen kann in einer einzigen Website enthalten sein, aber über mehrere Domänen bereitgestellt werden, einschließlich Sitzungsdaten zu Benutzerpräferenzen, Anpassungen usw.

Der Zugriff auf Drittanbieter-Cookies und nicht partitionierten Zustand wird häufig durch Browser-Richtlinien blockiert. Dennoch können Sie dies mit der Storage Access API umgehen – siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für Details.

Verwandte Websitemengen sind ein Mechanismus zur progressiven Verbesserung, der zusammen mit der Storage Access API funktioniert. Unterstützende Browser gewähren Drittanbieter-Cookie- und nicht partitionierten Zustandszugriff zwischen Websites in derselben Menge _ohne_ den üblichen Workflow zur Benutzerberechtigungsaufforderung durchlaufen zu müssen, sobald [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) (oder [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor)) aufgerufen wird. Dies führt zu einer benutzerfreundlicheren Erfahrung für die Benutzer von Websites in der Menge.

Sie sollten beachten, dass:

- Die nur in Chrome verfügbare Methode [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) — die es oberster Ebene ermöglicht, Speicherzugriff im Namen eingebetteter Ursprungsinhalte anzufordern — nur auf Domains innerhalb einer verwandten Websitemenge unterstützt wird. Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein Beispiel.
- Als Chrome erstmals die standardmäßige Storage Access API unterstützte (d.h. die Methoden [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) und [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)), erforderte es, dass aufrufende Websites Teil einer verwandten Websitemenge sind. Dies ist nicht mehr der Fall.

## Wie funktioniert RWS?

Eine verwandte Websitemenge besteht aus einer primären Website und bis zu fünf zugehörigen Websites.

### JSON-Struktur

Eine Menge wird durch eine JSON-Struktur dargestellt. Ein hypothetisches Beispiel ist wie folgt:

```json
{
  "sets": [
    {
      "contact": "email address or group alias if available",
      "primary": "https://primary1.com",
      "associatedSites": [
        "https://associateA.com",
        "https://associateB.com",
        "https://associateC.com"
      ],
      "serviceSites": ["https://servicesiteA.com"],
      "rationaleBySite": {
        "https://associateA.com": "Explanation of affiliation with primary site",
        "https://associateB.com": "Explanation of affiliation with primary site",
        "https://associateC.com": "Explanation of affiliation with primary site",
        "https://serviceSiteA.com": "Explanation of service functionality support"
      },
      "ccTLDs": {
        "https://associateA.com": [
          "https://associateA.ca",
          "https://associateA.co.uk"
        ],
        "https://associateB.com": [
          "https://associateB.ru",
          "https://associateB.co.kr"
        ],
        "https://primary1.com": ["https://primary1.co.uk"]
      }
    }
  ]
}
```

> [!NOTE]
> Die Erklärungen zur Zugehörigkeit müssen eine klare Beschreibung der Darstellung der Zugehörigkeit zur primären Website für die Benutzer dieser Websites enthalten.

Um eine Menge zu verwenden, muss deren JSON zur Datei `related_website_sets.JSON` hinzugefügt werden, die im [Related Website Sets GitHub-Repository](https://github.com/GoogleChrome/related-website-sets/blob/main/related_website_sets.JSON) verfügbar ist, die Chrome dann verwendet, um die Liste der Mengen zu erhalten, die das RWS-Verhalten anwenden.

### `.well-known`-Dateien

Jede Website in der Menge muss auch eine [`.well-known`](https://en.wikipedia.org/wiki/Well-known_URI)-Datei unter `/.well-known/related-website-set.json` bereitstellen, die der Verifizierung der Mengenstruktur und der Beziehung zwischen den Websites in der Menge dient.

Die `.well-known`-Datei der primären Website muss explizit die vollständige Mengenstruktur auslisten. `https://primary1.com` im obigen Beispiel würde eine `https://primary1.com/.well-known/related-website-set.json`-Datei benötigen, die ähnlich wie folgt aussieht:

```json
{
  "primary": "https://primary1.com",
  "associatedSites": [
    "https://associateA.com",
    "https://associateB.com",
    "https://associateC.com"
  ],
  "serviceSites": ["https://servicesiteA.com"],
  "rationaleBySite": {
    "https://associateA.com": "Explanation of affiliation with primary site",
    "https://associateB.com": "Explanation of affiliation with primary site",
    "https://associateC.com": "Explanation of affiliation with primary site",
    "https://serviceSiteA.com": "Explanation of service functionality support"
  },
  "ccTLDs": {
    "https://associateA.com": [
      "https://associateA.ca",
      "https://associateA.co.uk"
    ],
    "https://associateB.com": [
      "https://associateB.ru",
      "https://associateB.co.kr"
    ],
    "https://primary1.com": ["https://primary1.co.uk"]
  }
}
```

Jede zugehörige und Dienst-Website muss ihre primäre Website in einer `.well-known`-Datei angeben. Jede Nicht-Primär-Website im obigen Beispiel (z.B. `https://associateA.com`) würde eine `/.well-known/related-website-set.json`-Datei wie diese benötigen:

```json
{
  "primary": "https://primary1.com"
}
```

Für vollständige Details des Prozesses, der JSON-Syntax und anderer Anforderungen zur Einreichung von Mengen siehe die [Einreichungsrichtlinien](https://github.com/GoogleChrome/related-website-sets/blob/main/RWS-Submission_Guidelines.md). Nur Domain-Administratoren können eine Menge erstellen, die ihre Websites enthält.

Denken Sie daran, dass die `.well-known`-Dateien auch als Teil des Einreichungsprozesses überprüft werden, daher müssen sie vorhanden sein, bevor die zugehörige Menge eingereicht wird.

### Vorteile einer aktiven Menge

Sobald eine Menge aktiv ist:

- Anfragen von Websites in der Menge (über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)) für den Zugriff auf Drittanbieter-Cookies und nicht partitionierten Zustand, die zu Websites in der Menge gehören, werden automatisch gewährt, und kein Benutzergenehmigungsschritt ist erforderlich.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) Aufrufe können von Websites in der Menge auf oberster Ebene ausgeführt werden, um Zugriff auf Drittanbieter-Cookies für andere Websites in der Menge zu beantragen.

## RWS-Sicherheit

RWS wurde mit Hinblick auf Sicherheit entwickelt. Es wäre katastrophal, wenn eine bösartige Website vorgeben könnte, Teil einer Menge zu sein und die damit verbundenen Privilegien zu erlangen. Lassen Sie uns eine theoretische bösartige Website, `evilsite.example.com`, betrachten und einige Beispiele für Angriffe ansehen, die sie versuchen könnte, alle davon scheitern:

- **`evilsite.example.com` behauptet, eine zugehörige Website in einer anderen Menge zu sein**: Wenn eine Website behauptet, Teil einer Menge zu sein (`z.B.` durch Auflistung eines Primären in einer `.well-known`-Datei), aber nicht in der Mengeneinreichung und/oder in der `.well-known`-Datei des Primären enthalten ist, wird sie die Vorteile nicht erhalten.
- **`evilsite.example.com` behauptet, eine primäre Website zu sein, und reicht eine Menge ein, die einige Opfer-Websites umfasst**: Der Einreichungsprozess erfordert, dass `.well-known`-Dateien, die von Nicht-Primär-Websites gehostet werden, explizit ihren Primären auflisten. Wenn dieser Primär nicht mit der Mengeneinreichung übereinstimmt (`z.B.` wenn die zugehörigen/Dienst-Websites erwarten, einen anderen Primären zu haben oder nicht in einer Menge zu sein), wird die Einreichung abgelehnt.
- **`site1.example.com` und `site2.example.com` sind absichtlich in derselben Menge, aber `site1.example.com` wird von `evilsite.example.com` übernommen**: Die Auswirkungen eines Seitekaperns innerhalb einer Menge sind nicht schlimmer als üblich, wenn die anderen Websites entsprechend aktualisiert werden:
  - Die reguläre [Storage Access API](/de/docs/Web/API/Storage_Access_API) erfordert eine aktive Zustimmung der eingebetteten Website, daher kann `site2.example.com` aufhören, `document.requestStorageAccess()` aufzurufen, wenn es in `site1.example.com` eingebettet ist, um einen {{Glossary("CSRF", "CSRF")}}-Angriff zu vermeiden.
  - Die Verwendung von `requestStorageAccessFor()` erfordert [CORS](/de/docs/Web/HTTP/Guides/CORS), daher könnte `site2.example.com` sich entscheiden, nicht auf die passenden CORS-Header zu antworten, wenn Netzwerkanfragen von `site1.example.com` kommen, um so einen CSRF-Angriff zu vermeiden.

## Beispiele

- Die [Related Website Sets Demo](https://related-website-sets.glitch.me/) demonstriert, wie RWS verwendet wird.
- Siehe auch [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using).

## Spezifikationen

{{Specifications}}

### Standards-Positionen

Zwei Browser-Anbieter lehnen diese Spezifikation {{Glossary("Web_standards#opposing_standards", "ab")}}. Bekannte Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://mozilla.github.io/standards-positions/#first-party-sets)
- Apple (Safari): [Negativ](https://webkit.org/standards-positions/#position-93)

## Siehe auch

- [Storage Access API](/de/docs/Web/API/Storage_Access_API)
- [Related Website Sets](https://developers.google.com/privacy-sandbox/cookies/related-website-sets) auf developers.google.com (2023)
- [Related Website Sets: Entwicklerleitfaden](https://developers.google.com/privacy-sandbox/cookies/related-website-sets-integration) auf developers.google.com (2023)

---
title: Verbundene Website-Sets
slug: Web/API/Storage_Access_API/Related_website_sets
l10n:
  sourceCommit: a9022d6a71668aa945c6a0c1dbe0d531a98e0816
---

{{DefaultAPISidebar("Storage Access API")}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browser-Anbietern abgelehnt. Einzelheiten zur Ablehnung finden Sie im Abschnitt [Standards positions](#standards-positionen) unten.

Verbundene Website-Sets sind ein Mechanismus zum Definieren einer Gruppe von verwandten Websites, die vertrauenswürdigen Inhalt teilen. Dadurch können Browser diesen Websites standardmäßig Zugriff auf [Third-Party-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [unpartitionierten Status](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) gewähren, wenn deren Inhalte in anderen Set-Mitgliedern eingebettet sind, ohne dass Benutzer Zugriff auf die [Storage Access API](/de/docs/Web/API/Storage_Access_API) über eine Berechtigungsanfrage gewähren müssen.

## Konzepte und Nutzung

Betrachten wir Situationen, in denen Sie eine Reihe von verwandten Websites mit unterschiedlichen Domain-Namen haben und Sie möchten, dass Website-Inhalte Zugriff auf Third-Party-Cookies und unpartitionierten Status haben, wenn sie in einem Drittanbieter-Kontext innerhalb anderer verwandter Websites geladen werden (d.h. eingebettet in ein {{htmlelement("iframe")}}). Typische Anwendungsfälle sind:

- App-Websites: Eine einzelne Anwendung kann über mehrere Websites bereitgestellt werden und zielt darauf ab, Benutzern zu ermöglichen, nahtlos in einer einzigen Sitzung zwischen ihnen zu navigieren.
- Marken-Websites: Ein Satz von Markenressourcen kann auf einer einzelnen Website enthalten sein, aber dann über mehrere Domains bereitgestellt werden, einschließlich Sitzungsdaten bezüglich Benutzerpräferenzen, Anpassungen usw.

Der Zugriff auf Third-Party-Cookies und unpartitionierten Status wird üblicherweise durch Browser-Richtlinien blockiert. Dennoch können Sie dies mithilfe der Storage Access API umgehen — siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für Einzelheiten.

Verbundene Websites sind ein Mechanismus für progressive Verbesserungen, der neben der Storage Access API funktioniert. Unterstützende Browser gewähren Third-Party-Cookie- und unpartitionierten Zustand-Zugriff zwischen Websites im selben Set, _ohne_ dass der übliche Benutzerberechtigungsablauf durchlaufen werden muss, sobald [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) (oder [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor)) aufgerufen wird. Dies führt zu einer benutzerfreundlicheren Erfahrung für die Benutzer von Websites im Set.

Sie sollten beachten, dass:

- Die nur für Chrome verfügbare Methode [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) — die es Top-Level-Websites ermöglicht, Speicherzugriff im Namen eingebetteter Inhalte anzufordern — nur auf Domains innerhalb eines verwandten Website-Sets unterstützt wird. Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein Beispiel.
- Als Chrome erstmals die standardmäßige Storage Access API unterstützte (also die Methoden [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) und [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)), erforderte es, dass aufrufende Websites Teil eines verwandten Website-Sets sind. Dies ist inzwischen nicht mehr erforderlich.

## Wie funktioniert RWS?

Ein verwandtes Website-Set besteht aus einer primären Website und bis zu fünf assoziierten Websites.

### JSON-Struktur

Ein Set wird durch eine JSON-Struktur repräsentiert. Ein hypothetisches Beispiel ist wie folgt:

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
> Die Erklärungen zur Zugehörigkeit müssen eine klare Beschreibung darüber enthalten, wie die Zugehörigkeit zur primären Website den Benutzern dieser Websites dargestellt wird.

Um ein Set zu verwenden, muss dessen JSON zur Datei `related_website_sets.JSON` hinzugefügt werden, die im [Related Website Sets GitHub Repository](https://github.com/GoogleChrome/related-website-sets/blob/main/related_website_sets.JSON) verfügbar ist, aus der Chrome dann die Liste der Sets zur Anwendung des RWS-Verhaltens bezieht.

### `.well-known`-Dateien

Jede Website im Set muss auch eine [`.well-known`](https://en.wikipedia.org/wiki/Well-known_URI)-Datei unter `/.well-known/related-website-set.json` bereitstellen, die dazu dient, die Set-Struktur und die Beziehung zwischen den Websites im Set zu verifizieren.

Die `.well-known`-Datei der primären Website muss explizit die vollständige Set-Struktur auflisten. `https://primary1.com` im obigen Beispiel würde eine Datei `https://primary1.com/.well-known/related-website-set.json` benötigen, ähnlich dem Folgenden:

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

Jede assoziierte und Service-Website muss ihre primäre Website in einer `.well-known`-Datei angeben. Jede nicht-primäre Website im obigen Beispiel (z. B. `https://associateA.com`) würde eine Datei `/.well-known/related-website-set.json` wie diese benötigen:

```json
{
  "primary": "https://primary1.com"
}
```

Für vollständige Einzelheiten des Prozesses, der JSON-Syntax und anderer Anforderungen zum Einreichen von Sets, siehe die [Richtlinien zur Einreichung](https://github.com/GoogleChrome/related-website-sets/blob/main/RWS-Submission_Guidelines.md). Nur Domain-Administratoren können ein Set erstellen, das ihre Websites enthält.

Beachten Sie, dass die `.well-known`-Dateien auch als Teil des Einreichungsprozesses überprüft werden, sodass sie eingerichtet sein müssen, bevor das zugehörige Set eingereicht wird.

### Vorteile aktiver Sets

Sobald ein Set aktiv ist:

- Anfragen von Websites im Set (über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)), um auf Third-Party-Cookies und unpartitionierten Zustand zuzugreifen, der Websites im Set gehört, werden automatisch gewährt, und keine Benutzerberechtigungsstufe ist erforderlich.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor)-Aufrufe können von Top-Level-Websites im Set gemacht werden, um Third-Party-Cookie-Zugriff für andere Websites im Set zu beantragen.

## RWS-Sicherheit

RWS wurde mit Sicherheit im Auge entwickelt. Es wäre katastrophal, wenn eine böswillige Website behaupten könnte, Teil eines Sets zu sein und die damit verbundenen Privilegien zu erlangen. Betrachten wir eine theoretische böswillige Website, `evilsite.example.com`, und schauen uns einige Beispiele für Angriffe an, die sie versuchen könnte, die alle scheitern würden:

- **`evilsite.example.com` behauptet, eine assoziierte Website in einem anderen Set zu sein**: Wenn eine Website behauptet, in einem Set zu sein (d.h. indem sie eine primäre in einer `.well-known`-Datei aufführt), aber nicht in der Set-Einreichung und/oder der `.well-known`-Datei der primären Website enthalten ist, erhält sie keine Vorteile des Sets.
- **`evilsite.example.com` behauptet, eine primäre Website zu sein, und reicht ein Set ein, das einige potenzielle Opferseiten enthält**: Der Einreichungsprozess erfordert, dass `.well-known`-Dateien, die von nicht-primären Websites gehostet werden, explizit ihre primäre angeben. Wenn diese primäre nicht der Set-Einreichung entspricht (d.h. wenn die assoziierten/Service-Websites eine andere primäre erwarten oder nicht erwarten, in einem Set zu sein), wird die Einreichung abgelehnt.
- **`site1.example.com` und `site2.example.com` sind absichtlich im selben Set, aber `site1.example.com` wird von `evilsite.example.com` gehackt**: Die Auswirkungen eines Website-Hijacks innerhalb eines Sets sind nicht schlimmer als normalerweise, wenn die anderen Websites entsprechend aktualisiert werden:
  - Die reguläre [Storage Access API](/de/docs/Web/API/Storage_Access_API) erfordert eine aktive Zustimmung der eingebetteten Website, sodass `site2.example.com` aufhören kann, `document.requestStorageAccess()` aufzurufen, wenn sie in `site1.example.com` eingebettet ist, um einen {{Glossary("CSRF", "CSRF")}}-Angriff zu vermeiden.
  - Die Nutzung von `requestStorageAccessFor()` erfordert [CORS](/de/docs/Web/HTTP/Guides/CORS), sodass `site2.example.com` sich entscheiden könnte, nicht mit den geeigneten CORS-Headern zu antworten, wenn Netzwerk-Anfragen von `site1.example.com` kommen, und so einen CSRF-Angriff zu vermeiden.

## Beispiele

Für Codebeispiele siehe [Verbundene Website-Sets: Entwicklerleitfaden](https://privacysandbox.google.com/cookies/related-website-sets-integration) auf privacysandbox.google.com (2024)

## Spezifikationen

{{Specifications}}

### Standards-Positionen

Zwei Browser-Anbieter {{Glossary("Web_standards#opposing_standards", "lehnen")}} diese Spezifikation ab. Bekannte Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://mozilla.github.io/standards-positions/#first-party-sets)
- Apple (Safari): [Negativ](https://webkit.org/standards-positions/#position-93)

## Siehe auch

- [Storage Access API](/de/docs/Web/API/Storage_Access_API)
- [Verbundene Website-Sets](https://privacysandbox.google.com/cookies/related-website-sets) auf privacysandbox.google.com (2023)

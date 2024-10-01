---
title: Related Website Sets
slug: Web/API/Storage_Access_API/Related_website_sets
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{DefaultAPISidebar("Storage Access API")}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browser-Anbietern abgelehnt. Siehe den Abschnitt [Standardspositionen](#standardspositionen) unten für Details zur Ablehnung.

Related Website Sets sind ein Mechanismus zur Definition einer Gruppe verwandter Websites, die vertrauenswürdige Inhalte teilen. Dadurch können Browser diesen Websites standardmäßig Zugriff auf [Third-party cookies](/de/docs/Web/Privacy/Third-party_cookies) und [unpartitionierten Zustand](/de/docs/Web/Privacy/State_Partitioning#state_partitioning) gewähren, wenn sie Inhalte in anderen Gruppenmitgliedern einbetten, ohne dass Benutzer über eine Erlaubnismeldung Zugriff auf die [Storage Access API](/de/docs/Web/API/Storage_Access_API) gewähren müssen.

## Konzepte und Verwendung

Betrachten wir Situationen, in denen Sie eine Reihe verwandter Websites mit unterschiedlichen Domainnamen haben und Zugriff auf Third-party cookies und unpartitionierten Zustand ermöglichen möchten, wenn diese in einem dritten Kontext innerhalb anderer verwandter Websites geladen werden (z. B. eingebettet in ein {{htmlelement("iframe")}}). Typische Anwendungsfälle sind:

- App-Seiten: Eine einzelne Anwendung kann über mehrere Websites bereitgestellt werden, um Benutzern zu ermöglichen, nahtlos in einer einzigen Sitzung zwischen ihnen zu navigieren.
- Marken-Websites: Eine Reihe von Markenassets kann in einer einzigen Website enthalten sein, aber dann über mehrere Domains verteilt werden, einschließlich Sitzungsdaten zu Benutzerpräferenzen, Personalisierung usw.

Der Zugriff auf Third-party cookies und unpartitionierten Zustand wird häufig durch Richtlinien der Browser blockiert. Sie können dies jedoch mit der Storage Access API umgehen – siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für Details.

Related Website Sets sind ein Mechanismus zur progressiven Verbesserung, der neben der Storage Access API arbeitet. Unterstützende Browser gewähren den Zugriff auf Third-party cookies und unpartitionierten Zustand zwischen Websites derselben Gruppe _ohne_ den üblichen Workflow der Benutzererlaubnismeldung, sobald [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) (oder [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor)) aufgerufen wird. Dies führt zu einem benutzerfreundlicheren Erlebnis für Nutzer von Websites in der Gruppe.

Sie sollten beachten, dass:

- Die Chrome-exklusive Methode [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) – die es Top-Level-Seiten ermöglicht, Speicherung auf eingebettete Inhalte anzufordern – nur auf Domains innerhalb einer verwandten Website-Gruppe unterstützt wird. Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein Beispiel.
- Als Chrome die Standard Storage Access API zum ersten Mal unterstützte (d. h. die Methoden [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) und [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)), war es erforderlich, dass Aufrufe von Seiten innerhalb einer verwandten Website-Gruppe stammen. Dies ist nicht mehr der Fall.

## Wie funktioniert RWS?

Eine verwandte Website-Gruppe besteht aus einer primären Website und bis zu fünf zugehörigen Websites.

### JSON-Struktur

Eine Gruppe wird durch eine JSON-Struktur dargestellt. Ein hypothetisches Beispiel sieht wie folgt aus:

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
> Die Erklärungen zur Zugehörigkeit müssen eine klare Beschreibung enthalten, wie die Zugehörigkeit zur primären Website den Nutzern dieser Websites präsentiert wird.

Um eine Gruppe zu verwenden, muss deren JSON zur Datei `related_website_sets.JSON` hinzugefügt werden, die im [Related Website Sets GitHub-Repository](https://github.com/GoogleChrome/related-website-sets/blob/main/related_website_sets.JSON) verfügbar ist, welches Chrome dann nutzt, um die Liste der Gruppen zu erhalten, auf die das RWS-Verhalten angewendet werden soll.

### `.well-known`-Dateien

Jede Website in der Gruppe muss auch eine [`.well-known`](https://de.wikipedia.org/wiki/Well-known_URI)-Datei unter `/.well-known/related-website-set.json` bereitstellen, die dazu dient, die Gruppenstruktur und die Beziehung zwischen den Websites in der Gruppe zu überprüfen.

Die `.well-known`-Datei der primären Website muss die vollständige Gruppenstruktur explizit auflisten. `https://primary1.com` im obigen Beispiel müsste eine `https://primary1.com/.well-known/related-website-set.json`-Datei haben, die folgendermaßen aussieht:

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

Jede zugehörige und Service-Website muss ihre primäre Webseite in einer `.well-known`-Datei angeben. Jede nicht-primäre Website im obigen Beispiel (z. B. `https://associateA.com`) würde eine `/.well-known/related-website-set.json`-Datei wie diese benötigen:

```json
{
  "primary": "https://primary1.com"
}
```

Für vollständige Details zum Prozess, zur JSON-Syntax und zu anderen Anforderungen zur Einreichung von Gruppen siehe die [Einreichungsrichtlinien](https://github.com/GoogleChrome/related-website-sets/blob/main/RWS-Submission_Guidelines.md). Nur Domain-Administratoren können eine Gruppe erstellen, die ihre Websites enthält.

Beachten Sie, dass die `.well-known`-Dateien auch als Teil des Einreichungsprozesses überprüft werden. Daher müssen sie vor der Einreichung der zugehörigen Gruppe bereitgestellt werden.

### Vorteile aktiver Gruppen

Sobald eine Gruppe aktiv ist:

- Anfragen von Websites in der Gruppe (über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)) zum Zugriff auf Third-party cookies und unpartitionierten Zustand, die zu Websites in der Gruppe gehören, werden automatisch gewährt und kein Schritt zur Benutzererlaubnis ist erforderlich.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor)-Aufrufe können von Top-Level-Websites in der Gruppe gemacht werden, um Third-party cookie-Zugriff für andere Websites in der Gruppe anzufordern.

## RWS-Sicherheit

RWS wurde mit Blick auf Sicherheit entwickelt. Es wäre katastrophal, wenn eine bösartige Website behaupten könnte, Teil einer Gruppe zu sein und die damit verbundenen Privilegien zu erlangen. Betrachten wir eine theoretische bösartige Website, `evilsite.example.com`, und betrachten einige Beispiele für Angriffe, die sie versuchen könnte, die jedoch alle scheitern würden:

- **`evilsite.example.com` behauptet, eine zugehörige Website in einer anderen Gruppe zu sein**: Wenn eine Website behauptet, in einer Gruppe zu sein (`d.h.` durch das Auflisten einer primären in einer `.well-known`-Datei), aber nicht in der Gruppeneinreichung und/oder in der `.well-known`-Datei der primären Website enthalten ist, erhält sie nicht die Vorteile, in der Gruppe zu sein.
- **`evilsite.example.com` behauptet, eine primäre Website zu sein, und reicht eine Gruppe ein, die einige potenzielle Opfer-Websites umfasst**: Der Einreichungsprozess erfordert, dass `.well-known`-Dateien, die von nicht-primären Websites gehostet werden, ihre primäre explizit auflisten. Wenn diese primäre nicht mit der Gruppeneinreichung übereinstimmt (`d.h.` wenn die zugehörigen/Service-Websites erwarten, eine andere primäre zu haben oder überhaupt nicht in einer Gruppe zu sein), wird die Einreichung abgelehnt.
- **`site1.example.com` und `site2.example.com` gehören absichtlich zur gleichen Gruppe, aber `site1.example.com` wird von `evilsite.example.com` gehackt**: Die Auswirkungen eines Website-Hijack-Angriffs innerhalb einer Gruppe sind nicht schlimmer als normalerweise, sobald die anderen Websites entsprechend aktualisiert werden:
  - Die reguläre [Storage Access API](/de/docs/Web/API/Storage_Access_API) erfordert eine aktive Zustimmung der eingebetteten Website, sodass `site2.example.com` aufhören könnte, `document.requestStorageAccess()` zu rufen, wenn es in `site1.example.com` eingebettet ist, um einen {{Glossary("CSRF", "CSRF")}}-Angriff zu vermeiden.
  - Die Verwendung von `requestStorageAccessFor()` erfordert [CORS](/de/docs/Web/HTTP/CORS), sodass `site2.example.com` wählen könnte, nicht mit den entsprechenden CORS-Headern zu antworten, wenn Netzwerkaufrufe von `site1.example.com` kommen, um einen CSRF-Angriff zu vermeiden.

## Beispiele

- Das [Related Website Sets Demo](https://related-website-sets.glitch.me/) zeigt, wie RWS verwendet wird.
- Siehe auch [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using).

## Spezifikationen

{{Specifications}}

### Standardspositionen

Zwei Browser-Anbieter {{Glossary("Web_standards#opposing_standards", "lehnen")}} diese Spezifikation ab. Bekannte Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://mozilla.github.io/standards-positions/#first-party-sets)
- Apple (Safari): [Negativ](https://webkit.org/standards-positions/#position-93)

## Siehe auch

- [Storage Access API](/de/docs/Web/API/Storage_Access_API)
- [Related Website Sets](https://developers.google.com/privacy-sandbox/cookies/related-website-sets) auf developers.google.com (2023)
- [Related Website Sets: Entwicklerleitfaden](https://developers.google.com/privacy-sandbox/cookies/related-website-sets-integration) auf developers.google.com (2023)

---
title: Verwandte Website-Sets
slug: Web/API/Storage_Access_API/Related_website_sets
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Storage Access API")}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browserherstellern abgelehnt. Siehe den Abschnitt [Standards-Positionen](#standards-positionen) unten für Details zur Ablehnung.

Verwandte Website-Sets sind ein Mechanismus zur Definition einer Reihe von verwandten Websites, die vertrauenswürdigen Inhalt teilen. Dadurch können Browser standardmäßig diesen Websites Zugriff auf [Drittanbietercookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [unpartitionierten Zustand](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) gewähren, wenn sie Inhalte in anderen Mitgliedern des Sets eingebettet haben, ohne dass die Nutzer den Zugang zur [Storage Access API](/de/docs/Web/API/Storage_Access_API) über eine Berechtigungsanfrage gewähren müssen.

## Konzepte und Verwendung

Betrachten Sie Situationen, in denen Sie eine Reihe von verwandten Websites mit unterschiedlichen Domainnamen haben und den Zugriff auf Drittanbietercookies und unpartitionierten Zustand gewähren möchten, wenn diese in einem Drittanbieterkontext innerhalb anderer verwandter Sites geladen werden (z. B. eingebettet in einem {{htmlelement("iframe")}}). Typische Anwendungsfälle sind:

- App-Sites: Eine einzelne Anwendung kann über mehrere Sites bereitgestellt werden und so den Nutzern ermöglichen, nahtlos in einer einzigen Sitzung zwischen ihnen zu navigieren.
- Marken-Sites: Eine Reihe von Markeninhalten kann in einer einzigen Site enthalten sein, wird dann jedoch über mehrere Domains bereitgestellt, einschließlich Sitzungsdaten in Bezug auf Benutzerpräferenzen, Anpassungen usw.

Der Zugriff auf Drittanbietercookies und unpartitionierten Zustand wird häufig durch Browser-Richtlinien blockiert. Sie können dies jedoch mithilfe der Storage Access API umgehen – siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für Details.

Verwandte Website-Sets sind ein fortschreitender Verbesserungsmechanismus, der zusammen mit der Storage Access API funktioniert. Unterstützende Browser gewähren den Zugriff auf Drittanbietercookies und unpartitionierten Zustand zwischen Websites im selben Set _ohne_ den üblichen Workflow mit Benutzerberechtigungsanfragen durchlaufen zu müssen, sobald [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) (oder [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor)) aufgerufen wird. Dies führt zu einem benutzerfreundlicheren Erlebnis für die Nutzer von Websites im Set.

Sie sollten beachten, dass:

- Die Chrome-exklusive Methode [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) — die es obersten Websites ermöglicht, im Namen eingebetteter Inhalte Speicherzugriff anzufordern — wird nur auf Domains innerhalb eines verwandten Website-Sets unterstützt. Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein Beispiel.
- Als Chrome zuerst die Standard-Storage Access API unterstützte (das heißt die Methoden [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) und [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)), erforderte es, dass aufrufende Websites Teil eines verwandten Website-Sets waren. Dies ist nun nicht mehr der Fall.

## Wie funktioniert RWS?

Ein verwandtes Website-Set besteht aus einer primären Site und bis zu fünf zugehörigen Sites.

### JSON-Struktur

Ein Set wird durch eine JSON-Struktur dargestellt. Ein hypothetisches Beispiel ist wie folgt:

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
> Die Erklärungen zur Zugehörigkeit müssen eine klare Beschreibung enthalten, wie die Zugehörigkeit zur primären Site den Nutzern dieser Sites präsentiert wird.

Um ein Set zu verwenden, muss sein JSON zur `related_website_sets.JSON`-Datei hinzugefügt werden, die im [GitHub-Repository für verwandte Website-Sets](https://github.com/GoogleChrome/related-website-sets/blob/main/related_website_sets.JSON) verfügbar ist, die Chrome dann nutzt, um die Liste der Sets zu erhalten, auf die RWS-Verhalten angewendet werden soll.

### `.well-known`-Dateien

Jede Site im Set muss auch eine [.well-known](https://en.wikipedia.org/wiki/Well-known_URI)-Datei unter `/.well-known/related-website-set.json` bereitstellen, die dazu dient, die Struktur des Sets und die Beziehung zwischen den Sites im Set zu verifizieren.

Die `.well-known`-Datei der primären Site muss die vollständige Set-Struktur explizit auflisten. `https://primary1.com` im obigen Beispiel würde eine `https://primary1.com/.well-known/related-website-set.json`-Datei benötigen, die wie folgt aussieht:

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

Jede zugehörige und Dienstsite muss ihre primäre Site in einer `.well-known`-Datei angeben. Jede nicht-primäre Site im obigen Beispiel (z. B. `https://associateA.com`) würde eine `/.well-known/related-website-set.json`-Datei wie diese benötigen:

```json
{
  "primary": "https://primary1.com"
}
```

Für vollständige Details zum Prozess, zur JSON-Syntax und zu anderen Anforderungen für die Einreichung von Sets, siehe die [Einreichungsrichtlinien](https://github.com/GoogleChrome/related-website-sets/blob/main/RWS-Submission_Guidelines.md). Nur Domain-Administratoren können ein Set erstellen, das ihre Sites enthält.

Beachten Sie, dass die `.well-known`-Dateien auch als Teil des Einreichungsprozesses verifiziert werden, daher müssen sie vorhanden sein, bevor das zugehörige Set eingereicht wird.

### Vorteile aktiver Sets

Sobald ein Set aktiv ist:

- Anfragen von Sites im Set (über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)) zum Zugriff auf Drittanbietercookies und unpartitionierten Zustand, die zu Sites im Set gehören, werden automatisch gewährt, und es ist kein Benutzergenehmigungsschritt erforderlich.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor)-Aufrufe können von obersten Sites im Set gemacht werden, um Drittanbietercookie-Zugriff für andere Sites im Set anzufordern.

## RWS-Sicherheit

RWS wurde mit Blick auf Sicherheit entworfen. Es wäre katastrophal, wenn eine schädliche Site behaupten könnte, Teil eines Sets zu sein und die damit verbundenen Privilegien zu erlangen. Lassen Sie uns eine theoretische schädliche Site, `evilsite.example.com`, betrachten und einige Beispiele für Angriffe ansehen, die sie versuchen könnte, alle davon würden scheitern:

- **`evilsite.example.com` behauptet, eine zugehörige Site in einem anderen Set zu sein**: Wenn eine Site behauptet, in einem Set zu sein (d.h. indem sie eine primäre Site in einer `.well-known`-Datei auflistet) aber nicht in der Set-Einreichung und/oder der `.well-known`-Datei der primären Site enthalten ist, erhält sie nicht die Vorteile, Teil des Sets zu sein.
- **`evilsite.example.com` behauptet, eine primäre Site zu sein, und reicht ein Set ein, das einige potenzielle Opfer-Sites enthält**: Der Einreichungsprozess erfordert, dass `.well-known`-Dateien, die von nicht-primären Sites gehostet werden, ihre primäre Site explizit auflisten. Wenn diese primäre Site nicht mit der Set-Einreichung übereinstimmt (d.h. wenn die zugehörigen/dienenden Sites erwarten, eine andere primäre Site zu haben, oder nicht erwarten, Teil eines Sets zu sein), wird die Einreichung abgelehnt.
- **`site1.example.com` und `site2.example.com` sind absichtlich im selben Set, aber `site1.example.com` wird von `evilsite.example.com` gehijackt**: Die Auswirkungen eines Site-Hijacking-Angriffs innerhalb eines Sets sind nicht schlimmer, als sie normalerweise wären, sobald die anderen Sites entsprechend aktualisiert werden:
  - Die reguläre [Storage Access API](/de/docs/Web/API/Storage_Access_API) erfordert eine aktive Einwilligung der eingebetteten Site, daher kann `site2.example.com` aufhören, `document.requestStorageAccess()` aufzurufen, wenn es in `site1.example.com` eingebettet ist, um einen {{Glossary("CSRF", "CSRF")}}-Angriff zu vermeiden.
  - Die Verwendung von `requestStorageAccessFor()` erfordert [CORS](/de/docs/Web/HTTP/Guides/CORS), sodass `site2.example.com` sich entscheiden könnte, nicht mit den entsprechenden CORS-Headern zu antworten, wenn Netzwerkanfragen von `site1.example.com` kommen, um somit einen CSRF-Angriff zu vermeiden.

## Beispiele

- Die [Related Website Sets-Demo](https://related-website-sets.glitch.me/) demonstriert, wie RWS verwendet wird.
- Siehe auch [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using).

## Spezifikationen

{{Specifications}}

### Standards-Positionen

Zwei Browserhersteller {{Glossary("Web_standards#opposing_standards", "lehnen")}} diese Spezifikation ab. Bekannte Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://mozilla.github.io/standards-positions/#first-party-sets)
- Apple (Safari): [Negativ](https://webkit.org/standards-positions/#position-93)

## Siehe auch

- [Storage Access API](/de/docs/Web/API/Storage_Access_API)
- [Related Website Sets](https://developers.google.com/privacy-sandbox/cookies/related-website-sets) auf developers.google.com (2023)
- [Related Website Sets: Entwicklerleitfaden](https://developers.google.com/privacy-sandbox/cookies/related-website-sets-integration) auf developers.google.com (2023)

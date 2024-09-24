---
title: Zugehörige Website-Sets
slug: Web/API/Storage_Access_API/Related_website_sets
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{DefaultAPISidebar("Storage Access API")}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browseranbietern abgelehnt. Siehe den Abschnitt [Standards-Stellungen](#standards-stellungen) unten für Einzelheiten zur Ablehnung.

Zugehörige Website-Sets sind ein Mechanismus zur Definition eines Sets verwandter Websites, die vertrauenswürdige Inhalte teilen. Dadurch können Browser für diese Websites standardmäßig Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) und [unpartitionierten Zustand](/de/docs/Web/Privacy/State_Partitioning#state_partitioning) gewähren, wenn sie in anderen Mitgliedern des Sets eingebettet sind, ohne dass Benutzer den Zugriff auf die [Storage Access API](/de/docs/Web/API/Storage_Access_API) über eine Berechtigungsabfrage gewähren müssen.

## Konzepte und Verwendung

Betrachten wir Situationen, in denen Sie eine Reihe verwandter Websites mit unterschiedlichen Domain-Namen haben und den Website-Inhalten Zugang zu Drittanbieter-Cookies und unpartitioniertem Zustand gewähren möchten, wenn sie in einem Drittkontext innerhalb anderer verwandter Websites geladen werden (d.h. in einem {{htmlelement("iframe")}} eingebettet). Typische Anwendungsfälle sind:

- Anwendungsseiten: Eine einzelne Anwendung kann über mehrere Websites bereitgestellt werden und darauf abzielen, den Benutzern eine nahtlose Navigation zwischen ihnen in einer einzigen Sitzung zu ermöglichen.
- Markenwebsites: Ein Set von Markenressourcen kann in einer einzigen Website enthalten sein, aber über mehrere Domains bereitgestellt werden, einschließlich Sitzungsdaten bezüglich Benutzerpräferenzen, Anpassung usw.

Der Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand wird üblicherweise durch Browservorgaben blockiert. Dennoch können Sie dies mithilfe der Storage Access API umgehen — siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für Details.

Zugehörige Website-Sets sind ein fortschrittlicher Verbesserungsmechanismus, der zusammen mit der Storage Access API funktioniert. Unterstützende Browser gewähren den Zugang zu Drittanbieter-Cookies und unpartitioniertem Zustand zwischen Websites im selben Set _ohne_ den üblichen Arbeitsablauf für Benutzerberechtigungen, sobald {{domxref("Document.requestStorageAccess()")}} (oder {{domxref("Document.requestStorageAccessFor()")}}) aufgerufen wird. Dies führt zu einem benutzerfreundlicheren Erlebnis für Benutzer von Websites im Set.

Sie sollten beachten, dass:

- Die Chrome-exklusive Methode {{domxref("Document.requestStorageAccessFor()")}} — die es erlaubt, dass Top-Level-Websites Speicherzugriff im Namen von eingebetteten Herkunftsinhalten anfordern — nur für Domains innerhalb eines zugehörigen Website-Sets unterstützt wird. Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein Beispiel.
- Als Chrome zuerst die standardisierte Storage Access API unterstützte (d.h. die Methoden {{domxref("Document.hasStorageAccess()")}} und {{domxref("Document.requestStorageAccess()")}}), war es erforderlich, dass aufrufende Websites Teil eines zugehörigen Website-Sets sind. Dies ist nicht mehr der Fall.

## Wie funktioniert RWS?

Ein zugehöriges Website-Set besteht aus einer primären Website und bis zu fünf zugehörigen Websites.

### JSON-Struktur

Ein Set wird durch eine JSON-Struktur dargestellt. Ein hypothetisches Beispiel ist wie folgt:

```json
{
  "sets": [
    {
      "contact": "E-Mail-Adresse oder Gruppenalias, falls verfügbar",
      "primary": "https://primary1.com",
      "associatedSites": [
        "https://associateA.com",
        "https://associateB.com",
        "https://associateC.com"
      ],
      "serviceSites": ["https://servicesiteA.com"],
      "rationaleBySite": {
        "https://associateA.com": "Erklärung der Zugehörigkeit zur primären Website",
        "https://associateB.com": "Erklärung der Zugehörigkeit zur primären Website",
        "https://associateC.com": "Erklärung der Zugehörigkeit zur primären Website",
        "https://serviceSiteA.com": "Erklärung der Unterstützung der Servicefunktionalität"
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
> Die Erklärungen der Zugehörigkeit müssen eine klare Beschreibung enthalten, wie die Zugehörigkeit zur primären Website den Benutzern dieser Websites dargestellt wird.

Um ein Set zu verwenden, muss sein JSON zur Datei `related_website_sets.JSON` im [Related Website Sets GitHub-Repository](https://github.com/GoogleChrome/related-website-sets/blob/main/related_website_sets.JSON) hinzugefügt werden, die Chrome dann nutzt, um die Liste der Sets abzurufen, auf die das RWS-Verhalten angewendet wird.

### `.well-known` Dateien

Jede Website im Set muss auch eine [`.well-known`](https://en.wikipedia.org/wiki/Well-known_URI) Datei unter `/.well-known/related-website-set.json` bereitstellen, die zur Überprüfung der Set-Struktur und der Beziehung zwischen den Websites im Set dient.

Die `.well-known` Datei der primären Website muss die vollständige Set-Struktur ausdrücklich auflisten. `https://primary1.com` im obigen Beispiel würde eine `https://primary1.com/.well-known/related-website-set.json` Datei benötigen, die ähnlich dem Folgenden ist:

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
    "https://associateA.com": "Erklärung der Zugehörigkeit zur primären Website",
    "https://associateB.com": "Erklärung der Zugehörigkeit zur primären Website",
    "https://associateC.com": "Erklärung der Zugehörigkeit zur primären Website",
    "https://serviceSiteA.com": "Erklärung der Unterstützung der Servicefunktionalität"
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

Jede zugehörige und Service-Website muss ihre primäre Website in einer `.well-known` Datei spezifizieren. Jede Nicht-primäre Website im obigen Beispiel (z. B. `https://associateA.com`) würde eine `/.well-known/related-website-set.json` Datei wie diese benötigen:

```json
{
  "primary": "https://primary1.com"
}
```

Für vollständige Details des Prozesses, der JSON-Syntax und anderer Anforderungen zur Einreichung von Sets siehe die [Einreichungsrichtlinien](https://github.com/GoogleChrome/related-website-sets/blob/main/RWS-Submission_Guidelines.md). Nur Domain-Administratoren können ein Set erstellen, das ihre Websites enthält.

Beachten Sie, dass die `.well-known` Dateien auch als Teil des Einreichungsprozesses überprüft werden, sodass sie vor der Einreichung des zugehörigen Sets vorhanden sein müssen.

### Vorteile aktiver Sets

Sobald ein Set aktiv ist:

- Anfragen von Websites im Set (über {{domxref("Document.requestStorageAccess()")}}), die Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand anfordern, die zu Websites im Set gehören, werden automatisch gewährt, und es ist kein Benutzergenehmigungsschritt erforderlich.
- {{domxref("Document.requestStorageAccessFor()")}} Aufrufe können von Top-Level-Websites im Set vorgenommen werden, um den Zugriff auf Drittanbieter-Cookies für andere Websites im Set zu beantragen.

## RWS-Sicherheit

RWS wurde mit Blick auf Sicherheit entworfen. Es wäre katastrophal, wenn eine bösartige Website in der Lage wäre, zu behaupten, Teil eines Sets zu sein und die daraus resultierenden Privilegien zu erlangen. Betrachten wir eine theoretische bösartige Website `evilsite.example.com` und untersuchen einige Beispiele für Angriffe, die sie versuchen könnte, die alle scheitern würden:

- **`evilsite.example.com` behauptet, eine zugehörige Website in einem anderen Set zu sein**: Wenn eine Website behauptet, in einem Set zu sein (d.h. indem sie eine primäre Website in einer `.well-known` Datei auflistet), aber nicht in der Set-Einreichung und/oder der `.well-known` Datei der primären Website aufgeführt ist, wird sie die Vorteile der Zugehörigkeit zum Set nicht erhalten.
- **`evilsite.example.com` behauptet, eine primäre Website zu sein, und reicht ein Set ein, das einige potenzielle Opfer-Websites enthält**: Der Einreichungsprozess erfordert, dass `.well-known` Dateien, die von Nicht-prämiären Websites gehostet werden, ihre primäre Website ausdrücklich auflisten. Wenn diese primäre Website nicht mit der Set-Einreichung übereinstimmt (d.h. wenn die zugehörigen/Service-Websites eine andere primäre Website erwarten oder überhaupt nicht erwarten, Teil eines Sets zu sein), wird die Einreichung abgelehnt.
- **`site1.example.com` und `site2.example.com` sind absichtlich im selben Set, aber `site1.example.com` wird von `evilsite.example.com` gehackt**: Die Auswirkungen eines Website-Hijacking-Angriffs innerhalb eines Sets wären nicht schlimmer als sonst, sobald die anderen Websites entsprechend aktualisiert werden:
  - Die reguläre [Storage Access API](/de/docs/Web/API/Storage_Access_API) erfordert eine aktive Zustimmung der eingebetteten Website, sodass `site2.example.com` aufhören kann, `document.requestStorageAccess()` aufzurufen, wenn sie in `site1.example.com` eingebettet ist, um einen {{glossary("CSRF")}}-Angriff zu vermeiden.
  - Die Nutzung von `requestStorageAccessFor()` erfordert [CORS](/de/docs/Web/HTTP/CORS), sodass `site2.example.com` sich entscheiden könnte, nicht mit den entsprechenden CORS-Headern zu antworten, wenn Netzwerkanfragen von `site1.example.com` kommen, und so einen CSRF-Angriff vermeiden.

## Beispiele

- Die [Demo zu Zugehörigen Website-Sets](https://related-website-sets.glitch.me/) zeigt, wie RWS verwendet wird.
- Siehe auch [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using).

## Spezifikationen

{{Specifications}}

### Standards-Stellungen

Zwei Browseranbieter lehnen diese Spezifikation [ab](/de/docs/Glossary/Web_standards#opposing_standards). Bekannte Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://mozilla.github.io/standards-positions/#first-party-sets)
- Apple (Safari): [Negativ](https://webkit.org/standards-positions/#position-93)

## Siehe auch

- [Storage Access API](/de/docs/Web/API/Storage_Access_API)
- [Zugehörige Website-Sets](https://developers.google.com/privacy-sandbox/cookies/related-website-sets) auf developers.google.com (2023)
- [Zugehörige Website-Sets: Entwicklerhandbuch](https://developers.google.com/privacy-sandbox/cookies/related-website-sets-integration) auf developers.google.com (2023)

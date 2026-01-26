---
title: Lieferkettenangriffe
slug: Web/Security/Attacks/Supply_chain_attacks
l10n:
  sourceCommit: 3251a58ecf1ded5df0e1aa5d23c8436247252b52
---

Eine _Software-Lieferkette_ besteht aus sämtlicher Software und allen Tools, die zur Erstellung und Wartung eines Softwareprodukts verwendet werden. Dazu gehört nicht nur die für das Produkt selbst entwickelte Software, sondern auch alle Software und Tools, die in seiner Produktion verwendet werden.

Bei einem Lieferkettenangriff zielt der Angreifer darauf ab, einen Teil der Lieferkette des Produkts zu kompromittieren, um das Produkt selbst zu gefährden.

Das offensichtlichste Beispiel ist eine Drittanbieter-Bibliothek. Wenn Sie beispielsweise ein von einem Drittanbieter entwickeltes [npm](https://www.npmjs.com/)-Paket verwenden, hat dieses die Möglichkeit, Ihre Seite zu kompromittieren. Dies kann absichtlich geschehen, wenn es schädlich ist, oder versehentlich, wenn es unbeabsichtigte Schwachstellen enthält. Im Wesentlichen müssen Sie Ihren Drittanbieter-Abhängigkeiten genauso vertrauen wie Ihrem eigenen Code.

Weniger offensichtlich gilt das gleiche Prinzip für alle Tools, die Sie bei der Erstellung Ihrer Software verwenden, einschließlich Code-Editoren, Editor-Plugins, Versionskontrollsysteme, Build-Tools und so weiter. Jedes dieser Tools könnte im Zuge der von ihnen angewendeten Transformationen bösartigen oder anfälligen Code in Ihr endgültiges Softwareprodukt einfügen.

In diesem Dokument skizzieren wir Praktiken, die befolgt werden sollten, um Ihre Software-Lieferkette zu sichern. Es ist in zwei Hauptabschnitte gegliedert:

- [Sichern Ihrer Entwicklungsumgebung](#sichern_ihrer_entwicklungsumgebung): Praktiken zur Sicherstellung, dass Ihr eigener Code nicht kompromittiert wird.
- [Verwaltung von Drittanbieter-Abhängigkeiten](#verwaltung_von_drittanbieter-abhängigkeiten): Praktiken zur Sicherstellung, dass Ihre Abhängigkeiten nicht kompromittiert werden.

## Sichern Ihrer Entwicklungsumgebung

Ein möglicher Weg für einen Lieferkettenangriff ist, dass ein Angreifer Schwachstellen oder schädlichen Code direkt in Ihr eigenes Produkt einschleust. In diesem Abschnitt beschreiben wir einige Praktiken, die diese Bedrohung abwehren können.

### Implementierung von Zugangskontrollen

Implementieren Sie starke Zugangskontrollen für alle, die an dem Projekt arbeiten, einschließlich aller, die Schreibzugriff auf Ihr Code-Repository haben oder die Berechtigungen zum Ändern der Build- oder Testkonfiguration besitzen. Gute Praktiken umfassen hier:

- Erfordern von {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} für Teammitglieder.
- Befolgen des {{Glossary("principle_of_least_privilege", "Prinzips der minimalen Rechte")}}: das bedeutet, dass Teammitgliedern nur die Rechte eingeräumt werden, die sie benötigen, und die Anzahl der Teammitglieder, denen sehr mächtige Berechtigungen erteilt werden, aktiv minimiert wird.

### Absicherung von Tools

Bewerten Sie das Sicherheitsrisiko jedes der Tools, die Sie bei der Produktion Ihrer Website verwenden, einschließlich:

- Texteditoren und IDEs
- Editor-Plugins
- Versionskontrollsysteme
- Alle Tools, die an Ihren Build-, Test- und Bereitstellungsprozessen beteiligt sind

Für Open-Source-Software-Abhängigkeiten können Sie den [Kompakten Leitfaden zur Bewertung von Open-Source-Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software) verwenden, veröffentlicht von der [OpenSSF](https://openssf.org/), als Leitfaden.

### Absicherung Ihrer Konfiguration

Verstehen und übernehmen Sie sichere Einstellungen für Ihre Tools, insbesondere für Ihr Versionskontrollsystem. Zu den wichtigsten Schutzmaßnahmen gehören:

- Sicherstellen, dass Pull-Requests (PRs) von einem Code-Eigentümer geprüft und explizit genehmigt werden, bevor sie zusammengeführt werden können.
- Sicherstellen, dass PRs {{Glossary("continuous_integration", "Continuous Integration")}}-Prüfungen bestehen, bevor sie zusammengeführt werden können.
- Erfordern, dass Commits signiert werden.

Sehen Sie die [Best Practices für Source Code Management Plattformkonfiguration](https://best.openssf.org/SCM-BestPractices/) der OpenSSF, die spezifische Checklisten für GitHub und GitLab beinhaltet.

## Verwaltung von Drittanbieter-Abhängigkeiten

Drittanbieter-Abhängigkeiten umfassen nicht nur Bibliotheken und Frameworks, die Ihr Code verwendet, sondern alle Drittanbieter-Tools, die am Entwicklungsprozess beteiligt sind, einschließlich Editoren, IDEs, Versionskontrollsystemen, Paketmanagern und Build-Tools.

Um Probleme mit Drittanbieter-Abhängigkeiten zu mildern, besprechen wir vier Praktiken:

1. Bewertung neuer Abhängigkeiten
2. Aktualisieren bestehender Abhängigkeiten
3. Pflege einer _Software-Stückliste_ (SBOM)
4. Verwendung von Subresource Integrity für externe Skripte

### Bewertung neuer Abhängigkeiten

Bevor Sie eine neue Abhängigkeit hinzufügen, sollten Sie einschätzen, welches Sicherheitsrisiko sie darstellt. Sie müssen sicher sein, dass die Abhängigkeit aktiv gewartet wird, dass sie eine Historie zur Behebung von Problemen und einen Prozess zur Meldung und Reaktion auf Sicherheitslücken hat.

Sie sollten abwägen, ob das Risiko, die Abhängigkeit hinzuzufügen, die Kosten für die Implementierung der Funktion selbst überwiegt.

Der [Kompakte Leitfaden zur Bewertung von Open-Source-Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), veröffentlicht von der [OpenSSF](https://openssf.org/), listet Fragen auf, die Sie sich stellen sollten, bevor Sie eine neue Abhängigkeit hinzufügen.

### Aktualisieren von Abhängigkeiten

Sobald Sie eine Abhängigkeit in Ihr Projekt aufgenommen haben, wird der Lieferant der Abhängigkeit in der Regel neue Versionen mit neuen Funktionen, Fehlerbehebungen und Sicherheitskorrekturen herausbringen. Sie werden normalerweise davon profitieren wollen, indem Sie einen Mechanismus implementieren, um die Abhängigkeit auf dem neuesten Stand zu halten. Tools wie GitHubs [dependabot](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/dependabot-quickstart-guide) können dabei helfen, indem sie neue Versionen von Abhängigkeiten erkennen und automatisch Pull-Requests zur Aktualisierung Ihres Projekts eröffnen.

Jedoch birgt das allzu eifrige Aktualisieren von Abhängigkeiten eigene Risiken. Angenommen, Sie fügen eine Abhängigkeit zu einem vertrauenswürdigen Drittanbieter-Paket hinzu. Ein Angreifer übernimmt dann die Kontrolle über das Konto des Paketentwicklers und veröffentlicht ein bösartiges Update. Wenn Sie das Update sofort akzeptieren, ist Ihr Projekt gefährdet.

#### Verwendung einer Lockdatei

Der erste Schritt zur Absicherung von Abhängigkeitsupdates besteht darin, eine _Lockdatei_ für Abhängigkeiten zu verwenden, diese in die Versionskontrolle einzuchecken und sie beim Erstellen Ihres Projekts zu verwenden.

Paketmanager wie [npm](https://www.npmjs.com/) und [Yarn](https://yarnpkg.com/) ermöglichen es Ihnen, eine Datei wie [package.json](https://docs.npmjs.com/cli/configuring-npm/package-json/) bereitzustellen, die die Abhängigkeiten Ihres Projekts auflistet. Sie können dann einen Befehl ausführen, der die angegebenen Abhängigkeiten installiert, damit das Projekt sie nutzen kann.

Allerdings bestimmt die Abhängigkeitsliste nicht die genaue Version jedes Pakets: Wenn der Paketanbieter eine neue Version veröffentlicht, kann diese automatisch in Ihr Projekt aufgenommen werden, wenn es gebaut wird. Wenn die neue Version der Abhängigkeit bösartig ist, kann sie automatisch in Ihr Projekt aufgenommen werden, ohne dass Sie sich dessen bewusst sind.

Angenommen, Ihre package.json enthält eine Abhängigkeit namens "example-dependency":

```json
{
  "name": "example-project",
  "version": "1.0.0",
  "dependencies": {
    "example-dependency": "^1.0.2"
  }
}
```

Angenommen, der Buildprozess Ihres Projekts läuft automatisch, wenn Ihre Lieferanten neue Versionen veröffentlichen. Der Buildprozess startet den Build, indem er `npm install` aufruft. Dies wird die neueste Version von "example-dependency" abrufen, vorbehaltlich des Versionsbereichs `"^1.0.2"`.

In Version `1.0.2`, dem Punkt, an dem Sie sie dem Projekt hinzugefügt haben, ist "example-dependency" ein nützliches, harmloses Paket. Dann übernimmt ein Angreifer das Konto des Entwicklers von "example-dependency" und veröffentlicht eine bösartige `1.0.3`-Version. Ihr Buildprozess läuft, installiert das bösartige Paket, und Sie sind kompromittiert.

All dies ist geschehen, ohne dass es Änderungen an den direkten Artefakten Ihres Projekts gegeben hat oder Sie die Möglichkeit gehabt hätten, das Update zu überprüfen und zu sehen, ob es verdächtig aussieht.

Die Lösung hierfür besteht darin, beim Erstellen Ihres Projekts eine Lockdatei zu verwenden. Eine Lockdatei wird automatisch generiert, wann immer die Abhängigkeiten eines Projekts installiert werden, und sie listet die genauen Versionen der direkten und indirekten Abhängigkeiten auf, die in einem Projekt verwendet werden.

Das heißt, wenn _package.json_ Ihnen mitteilt, dass Ihr Projekt "example-dependency" verwendet, dann wird _package.lock_ Ihnen genau sagen, welche Version von "example-dependency" zu verwenden ist und welche Versionen seiner Abhängigkeiten vorliegen.

Die Lockdatei Ihres Projekts sollte in die Versionskontrolle eingecheckt werden. Beim Erstellen Ihres Projekts sollten Sie die Lockdatei verwenden, um zu steuern, welche Versionen Ihrer Abhängigkeiten installiert werden: in npm tun Sie dies, indem Sie [`npm ci`](https://docs.npmjs.com/cli/commands/npm-ci/) anstelle von `npm install` verwenden.

> [!NOTE]
> Diese Art der Fixierung der Versionen Ihrer Abhängigkeiten wird manchmal "Version Pinning" genannt.

Dies bedeutet, dass Ihr Buildsystem, um Abhängigkeiten zu aktualisieren, einen Pull-Request durchführen muss, um die Lockdatei zu aktualisieren, und dies gibt Ihnen die Möglichkeit, das Update zu überprüfen und sicherzustellen, dass Sie es akzeptieren möchten.

#### Überprüfung von Updates

Bei der Überprüfung eines Updates einer Abhängigkeit überlegen Sie, ob es ein Update ist, das Sie akzeptieren möchten:

- Lesen Sie das Changelog der Veröffentlichung, um zu verstehen, was sie bietet (und ob Sie es überhaupt akzeptieren müssen).
- Sehen Sie nach, ob es zusätzliche Abhängigkeiten einführt.
- Überprüfen Sie, wenn möglich, die Quellcode-Updates und sehen Sie, ob einige davon unerklärlich sind oder nicht mit dem Changelog übereinstimmen.
- Ziehen Sie in Betracht, ein wenig zu warten, bevor Sie aktualisieren: Oft werden Lieferkettenangriffe schnell von Sicherheitsforschern entdeckt, und es ist besser für Sie, wenn ein Update als bösartig erkannt wird, bevor Sie es akzeptiert haben.

### Pflege einer Software-Stückliste

Um einen tieferen Einblick in Ihre Abhängigkeiten zu erhalten, können Sie eine detaillierte Bestandsaufnahme dieser führen. Dies wird als _Software-Stückliste_ (SBOM) bezeichnet.

Eine Lockdatei ist wirklich eine Art SBOM: Der Begriff "SBOM" bezieht sich jedoch normalerweise auf ein separates Standardformat zur Darstellung von Abhängigkeiten. Diese Standards sind in der Regel sowohl breiter als auch tiefer als eine Lockdatei. Das heißt:

- Sie können Abhängigkeiten erfassen, wie z.B. Webservices, die in einer Lockdatei nicht dargestellt sind.
- Sie können zusätzliche Informationen zu jeder Abhängigkeit erfassen, die in einer Lockdatei nicht dargestellt sind.

Die Verwendung eines Standardformats zur Darstellung einer SBOM bedeutet auch, dass Sie:

- Ihre SBOM mit Dritten teilen können
- Tools integrieren können, die Ihre SBOM verstehen können, zu Zwecken wie regulatorischer Konformität oder Schwachstellenüberwachung.

Die beiden gebräuchlichsten Standards zur Darstellung einer Software-Stückliste sind:

- [CycloneDX](https://cyclonedx.org/), ursprünglich entwickelt von [OWASP](https://owasp.org/).
- [SPDX](https://spdx.dev/), gepflegt von der [Linux Foundation](https://www.linuxfoundation.org/).

Beide Standards haben gute Unterstützung, und Sie können entweder verwenden, um die SBOM für Ihr Projekt darzustellen. SPDX war anfänglich darauf ausgerichtet, Produkten zu helfen, sicherzustellen, dass sie mit Open-Source-Softwarelizenzen konform sind, hat aber Funktionen hinzugefügt, um Sicherheitsanwendungsfälle zu unterstützen. CycloneDX ist ein neuerer und leichterer Standard, der von Anfang an darauf fokussiert war, die Sicherheit in der Lieferkette zu fördern.

#### Anatomie einer SBOM

> [!NOTE]
> In diesem Abschnitt verwenden wir CycloneDX als konkretes Beispiel für ein SBOM-Format.
>
> Dieser Abschnitt bietet nur eine kurze Einführung in einige der grundlegendsten Teile des CycloneDX-Objektmodells. Für die vollständigen Details siehe die CycloneDX [Authoritative Guide to SBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-SBOM-en.pdf).

In CycloneDX sind alle Abhängigkeiten entweder _Komponenten_ oder _Dienste_.

- Komponenten umfassen, aber sind nicht beschränkt auf Software-Frameworks, Bibliotheken, Anwendungen und Konfigurationsdaten.
- Dienste repräsentieren externe APIs, die Software möglicherweise aufruft, zum Beispiel über Endpunkt-URIs.

Jede direkt oder indirekt im Produkt verwendete Komponente und jeder Dienst wird durch ein Objekt in der SBOM dargestellt. Das Objekt enthält Informationen über das Element, einschließlich Name, Version, Autor, Lizenz, Beschreibung, {{Glossary("hash_function", "Hashes")}} (für Komponenten) und Endpunkt-URIs (für Dienste).

Die SBOM listet auch Schwachstellen auf, die in den Abhängigkeiten des Produkts identifiziert wurden. Jedes Element in der Liste enthält Informationen über diese Schwachstelle, einschließlich einer Beschreibung, einer Reihe von [CWE](https://cwe.mitre.org/index.html)-Codes, Abhilfen, Links zu Beratungsstellen und den Identifikatoren für die Komponenten oder Dienste, die die Schwachstelle betrifft.

#### Erstellen einer SBOM

Sie können eine SBOM für ein Produkt mit einem separaten Tool wie [cdxgen](https://cdxgen.github.io/cdxgen/#/) oder einem Befehl wie [`npm sbom`](https://docs.npmjs.com/cli/commands/npm-sbom/) generieren. Eine SBOM wird normalerweise als Teil des Buildprozesses generiert, obwohl es möglich ist, sie in anderen Phasen des Software-Lebenszyklus zu erstellen.

#### Verwendung einer SBOM

Eine SBOM ermöglicht es Ihnen, mehrere Abwehrmaßnahmen gegen Lieferkettenangriffe zu implementieren, und wir listen hier drei wichtige auf:

- **Schwachstellenverwaltung**: Eine der Hauptanwendungen für eine SBOM besteht darin, auf Schwachstellen zu reagieren, die in Ihren Abhängigkeiten identifiziert wurden. Sie können Drittanbietertools wie OWASPs [Dependency-Track](https://dependencytrack.org/) verwenden, die dies automatisieren, indem sie Quellen für Schwachstellenberichte durchsuchen, wie die [NIST National Vulnerability Database](https://nvd.nist.gov/) oder [GitHub Advisories](https://github.com/advisories).
- **Integritätsprüfung**: Wenn die SBOM Hashes für Abhängigkeiten enthält, ist es möglich zu überprüfen, dass die Quelle der Komponente, von der Sie abhängen, nicht von ihrer ursprünglichen Freigabeform geändert wurde.
- **Lieferantenrisikomanagement**: Indem Sie Informationen über den Lieferanten Ihrer Abhängigkeiten erfassen, kann Ihnen eine SBOM helfen zu verstehen, wann Sie von Komponenten oder Diensten von Lieferanten abhängen, die nicht mehr als zuverlässig gelten.

### Verwendung von Subresource Integrity

Viele Websites beinhalten extern gehostete Skripte: insbesondere, aber nicht ausschließlich, Skripte, die von einem {{Glossary("CDN", "Content Delivery Network (CDN)")}} bereitgestellt werden:

```html
<script src="https://cdn.example.org/library.js"></script>
```

Dies stellt ein Risiko für Ihre Lieferkette dar: Wenn ein Angreifer die Kontrolle über die Domäne `cdn.example.org` erlangen kann, kann er das Skript durch ein bösartiges Skript ersetzen und so Ihre Seite gefährden.

Externe Skripte sollten, wie andere Software-Abhängigkeiten, Teil Ihrer SBOM sein, aber eine zusätzliche Verteidigung besteht darin, das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut des Skripts festzulegen:

```html
<script
  src="https://cdn.example.org/library.js"
  integrity="sha256-d5f450f7ce715d827de27ca569e183f819d33c1e7601875fd61eccbc98f56c5b"></script>
```

Der Wert dieses Attributs enthält einen {{Glossary("hash_function", "kryptografischen Hash")}} des Inhalts des Skripts. Wenn das Skript von einem Angreifer modifiziert wurde, wird der Browser es nicht laden, und Sie werden geschützt.

Dies fügt jedoch eine zusätzliche Wartungsbelastung hinzu: Jedes Mal, wenn sich die Quelle ändert (zum Beispiel, jedes Mal, wenn eine neue Version freigegeben wird), müssen Sie den Wert des Attributs in Ihrem Code aktualisieren.

Das {{htmlelement("link")}}-Element unterstützt ebenfalls das `integrity`-Attribut, sodass Sie es sowohl für CSS-Stylesheets als auch für Skripte verwenden sollten.

Siehe [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) für weitere Details.

## Zusammenfassende Verteidigungskontrollliste

- Erfordern von {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} für Teammitglieder und Minimieren der gewährten Berechtigungen.
- Bewertung der Tools, die an Ihren Build-, Test-, und Bereitstellungsprozessen beteiligt sind.
- Sicherstellen, dass Pull-Requests eine Überprüfung durchlaufen und {{Glossary("continuous_integration", "Continuous Integration")}}-Prüfungen bestehen.
- Minimieren Sie Ihre Abhängigkeiten und folgen Sie einem Prozess zur Bewertung neuer Abhängigkeiten.
- Verwenden Sie eine Lockdatei zur Kontrolle von Updates Ihrer Abhängigkeiten und befolgen Sie einen Prozess zur Annahme von Updates.
- Pflegen Sie eine SBOM und verwenden Sie sie, um nach Schwachstellen zu suchen.
- Verwenden Sie Subresource Integrity für extern referenzierte Skripte und Stylesheets.

## Siehe auch

- [Software Supply Chain Security](https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html) auf [owasp.org](https://owasp.org/)
- [OpenJS Security Collaboration Space](https://github.com/openjs-foundation/security-collab-space?tab=readme-ov-file#documents--guides) - Ein zentraler Hub für Sicherheitsleitlinien und -ressourcen für das JavaScript-Ökosystem, einschließlich:
  - [SBOM und Herausforderungen der Sicherheit in der Lieferkette](https://github.com/openjs-foundation/security-collab-space/blob/main/docs/SBOM/OpenJS-SBOM-CSCRM-Challenges-Recommendations.md) - Empfehlungen für JavaScript-SBOM und Software-Attestierung
  - [Richtlinien zur Sicherheitskonformität](https://github.com/openjs-foundation/security-collab-space/blob/main/docs/OpenJS_Security_Compliance_Guidelines/v1/readme.md) - Eine umfassende Checkliste für die betriebliche Sicherheit
  - [Anleitung zu den besten Sicherheitspraktiken für npm](https://github.com/openjs-foundation/security-collab-space/blob/main/docs/npm-security-best-practices.md) - Beste Praktiken zur Sicherung von npm-Paketen und -Abhängigkeiten
  - [Anleitung für sichere Veröffentlichungen](https://github.com/openjs-foundation/security-collab-space/blob/main/docs/Secure_Releases/secure-releases.md) - Richtlinien zur Erstellung sicherer Softwareveröffentlichungen

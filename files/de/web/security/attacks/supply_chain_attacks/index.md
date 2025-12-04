---
title: Lieferkettenangriffe
slug: Web/Security/Attacks/Supply_chain_attacks
l10n:
  sourceCommit: 7aef64e7e9a217d5df7784e7adbe89ecc2bc7b07
---

Eine _Software-Lieferkette_ besteht aus der gesamten Software und den Werkzeugen, die zur Erstellung und Wartung eines Softwareprodukts verwendet werden. Dazu gehört nicht nur die für das Produkt selbst entwickelte Software, sondern auch alle Software und Werkzeuge, die in dessen Produktion eingesetzt werden.

Bei einem Lieferkettenangriff zielt der Angreifer auf einen Teil der Produktlieferkette ab, um das Produkt selbst zu kompromittieren.

Das offensichtlichste Beispiel ist eine Bibliothek eines Drittanbieters. Wenn Sie zum Beispiel ein von einem Drittanbieter entwickeltes [npm](https://www.npmjs.com/)-Paket nutzen, hat es die Möglichkeit, Ihre Seite zu gefährden. Es kann dies absichtlich tun, wenn es bösartig ist, oder versehentlich, wenn es unbeabsichtigte Schwachstellen enthält. Im Wesentlichen müssen Sie Ihren Drittanbieter-Abhängigkeiten genauso vertrauen wie Ihrem eigenen Code.

Weniger offensichtlich gilt das gleiche Prinzip für alle Werkzeuge, die Sie bei der Erstellung Ihrer Software verwenden, einschließlich Code-Editoren, Editor-Plugins, Versionskontrollsystemen, Build-Tools und so weiter. Jedes dieser Werkzeuge könnte im Laufe der von ihnen angewendeten Transformationen bösartigen oder anfälligen Code in Ihr endgültiges Softwareprodukt einfügen.

In diesem Dokument werden wir Praktiken skizzieren, die Sie befolgen sollten, um Ihre Softwarelieferkette abzusichern. Es ist in zwei Hauptabschnitte unterteilt:

- [Absicherung Ihrer Entwicklungsumgebung](#absicherung_ihrer_entwicklungsumgebung): Praktiken, um sicherzustellen, dass Ihr eigener Code nicht kompromittiert wird.
- [Verwaltung von Drittanbieter-Abhängigkeiten](#verwaltung_von_drittanbieter-abhängigkeiten): Praktiken, um sicherzustellen, dass Ihre Abhängigkeiten nicht kompromittiert werden.

## Absicherung Ihrer Entwicklungsumgebung

Ein Weg für einen Lieferkettenangriff besteht darin, dass ein Angreifer Schwachstellen oder bösartigen Code direkt in Ihr eigenes Produkt einführt. In diesem Abschnitt beschreiben wir einige Praktiken, die dieser Bedrohung entgegenwirken können.

### Implementierung von Zugangskontrollen

Implementieren Sie eine starke Zugangskontrolle für alle, die am Projekt arbeiten, einschließlich aller, die Schreibzugriff auf Ihr Code-Repository haben oder die Berechtigung, die Build- oder Testkonfiguration zu ändern. Gute Praktiken sind hier:

- Erfordern von {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} für Teammitglieder.
- Befolgen Sie das {{Glossary("principle_of_least_privilege", "Prinzip der geringsten Privilegien")}}: das bedeutet, nur denjenigen Teammitgliedern Privilegien zu gewähren, die sie benötigen, und aktiv die Anzahl der Teammitglieder zu minimieren, die sehr mächtige Berechtigungen erhalten.

### Absicherung von Werkzeugen

Bewerten Sie das Sicherheitsrisiko aller Tools, die Sie bei der Produktion Ihrer Seite verwenden, einschließlich:

- Texteditoren und IDEs
- Editor-Plugins
- Versionskontrollsysteme
- Alle Tools, die an Ihren Build-, Test- und Bereitstellungsprozessen beteiligt sind

Für Abhängigkeiten von Open-Source-Software können Sie den [Kompakten Leitfaden zur Bewertung von Open-Source-Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), veröffentlicht von der [OpenSSF](https://openssf.org/), als Leitfaden verwenden.

### Sicherung Ihrer Konfiguration

Verstehen und wenden Sie sichere Einstellungen für Ihre Werkzeuge an, insbesondere Ihr Versionskontrollsystem. Wichtige Schutzmaßnahmen sind:

- Sicherstellen, dass Pull Requests (PRs) einer Überprüfung und ausdrücklichen Genehmigung durch einen Codeeigentümer unterzogen werden, bevor sie zusammengeführt werden können.
- Sicherstellen, dass PRs {{Glossary("continuous_integration", "Continuous Integration")}}-Prüfungen bestehen, bevor sie zusammengeführt werden können.
- Erfordern, dass Commits signiert sind.

Siehe die [Best Practices für die Konfiguration von Versionskontrollplattformen](https://best.openssf.org/SCM-BestPractices/) der OpenSSF, die spezifische Checklisten für GitHub und GitLab enthalten.

## Verwaltung von Drittanbieter-Abhängigkeiten

Drittanbieter-Abhängigkeiten umfassen nicht nur Bibliotheken und Frameworks, die Ihr Code verwendet, sondern auch alle Drittanbieter-Tools, die in den Entwicklungsprozess involviert sind, einschließlich Editoren, IDEs, Versionskontrollsysteme, Paketmanager und Build-Tools.

Um Probleme mit Drittanbieter-Abhängigkeiten zu mindern, werden wir vier Praktiken diskutieren:

1. Bewertung neuer Abhängigkeiten
2. Aktualisierung bestehender Abhängigkeiten
3. Pflege einer _Stückliste für Software_ (SBOM)
4. Verwendung von Subresource Integrity für externe Skripte

### Bewertung neuer Abhängigkeiten

Bevor Sie eine neue Abhängigkeit hinzufügen, sollten Sie bewerten, welches Sicherheitsrisiko sie darstellt. Sie müssen sicher sein, dass die Abhängigkeit aktiv gepflegt wird, dass sie eine Historie der Behebung von Problemen hat und ein Verfahren zur Meldung und Reaktion auf Sicherheitslücken existiert.

Sie sollten abwägen, ob das Risiko des Hinzufügens der Abhängigkeit die Kosten der Eigenentwicklung der Funktion überwiegt.

Der [Kompakte Leitfaden zur Bewertung von Open-Source-Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), veröffentlicht von der [OpenSSF](https://openssf.org/), listet Fragen auf, die Sie stellen sollten, bevor Sie eine neue Abhängigkeit hinzufügen.

### Aktualisierung von Abhängigkeiten

Sobald Sie eine Abhängigkeit zu Ihrem Projekt hinzugefügt haben, wird der Anbieter der Abhängigkeit typischerweise neue Versionen mit neuen Features, Bugfixes und Sicherheitskorrekturen veröffentlichen. In der Regel möchten Sie diese Updates nutzen, indem Sie einen Mechanismus implementieren, um die Abhängigkeit auf dem aktuellen Stand zu halten. Tools wie GitHubs [dependabot](https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide) können dabei helfen, indem sie neue Versionen von Abhängigkeiten erkennen und automatisch Pull Requests öffnen, um Ihr Projekt zu aktualisieren.

Allerdings birgt das zu rasche Aktualisieren von Abhängigkeiten auch Risiken. Angenommen, Sie fügen eine Abhängigkeit von einem vertrauenswürdigen Drittanbieter hinzu. Ein Angreifer übernimmt dann das Konto des Paketentwicklers und veröffentlicht ein bösartiges Update. Wenn Sie das Update sofort annehmen, wird Ihr Projekt kompromittiert.

#### Verwendung einer Lock-Datei

Der erste Schritt zur Sicherung von Abhängigkeitsaktualisierungen ist die Verwendung einer _Lock-Datei_ für Abhängigkeiten, deren Einbindung in die Versionskontrolle und Nutzung beim Erstellen Ihres Projekts.

Paketmanager wie [npm](https://www.npmjs.com/) und [Yarn](https://yarnpkg.com/) ermöglichen es Ihnen, eine Datei wie [package.json](https://docs.npmjs.com/cli/configuring-npm/package-json/) bereitzustellen, die die Abhängigkeiten Ihres Projekts auflistet. Sie können dann einen Befehl ausführen, der die angegebenen Abhängigkeiten installiert, damit das Projekt sie verwenden kann.

Die Abhängigkeitsliste bestimmt jedoch nicht die genaue Version jedes Pakets: Wenn der Paketlieferant eine neue Version veröffentlicht, kann diese automatisch in Ihr Projekt aufgenommen werden, wenn es gebaut wird. Wenn die neue Version der Abhängigkeit bösartig ist, kann sie automatisch in Ihr Projekt aufgenommen werden, ohne dass Sie es überhaupt bemerken.

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

Angenommen, der Build-Prozess Ihres Projekts wird automatisch ausgeführt, wenn Ihre Lieferanten neue Versionen veröffentlichen. Der Build-Prozess startet den Build durch den Aufruf von `npm install`. Dies wird die neueste Version von "example-dependency" abrufen, vorbehaltlich der Versionsspanne `"^1.0.2"`.

In Version `1.0.2`, die Sie dem Projekt hinzugefügt haben, ist "example-dependency" ein nützliches, harmloses Paket. Dann übernimmt ein Angreifer das Konto des Entwicklers von "example-dependency" und veröffentlicht eine bösartige Version `1.0.3`. Ihr Build-Prozess läuft, installiert das bösartige Paket und Sie sind kompromittiert.

All dies ist passiert, ohne dass es Änderungen an den direkten Artefakten Ihres Projekts gab oder ohne dass Sie die Möglichkeit hatten, das Update zu überprüfen und zu sehen, ob es verdächtig aussieht.

Die Lösung dafür ist, beim Bauen Ihres Projekts eine Lock-Datei zu verwenden. Eine Lock-Datei wird automatisch erzeugt, wenn Abhängigkeiten eines Projekts installiert werden, und sie listet die genauen Versionen der direkten und indirekten Abhängigkeiten auf, die in einem Projekt verwendet werden.

Das bedeutet, wenn _package.json_ Ihnen sagt, dass Ihr Projekt "example-dependency" verwendet, dann wird _package-lock.json_ Ihnen genau sagen, welche Version von "example-dependency" verwendet werden soll und welche Versionen seiner Abhängigkeiten sind.

Die Lock-Datei Ihres Projekts sollte in die Versionskontrolle eingebracht werden. Beim Bauen Ihres Projekts sollten Sie die Lock-Datei verwenden, um zu steuern, welche Versionen Ihrer Abhängigkeiten installiert werden: in npm tun Sie dies, indem Sie [`npm ci`](https://docs.npmjs.com/cli/commands/npm-ci/) statt `npm install` verwenden.

> [!NOTE]
> Das Fixieren der Versionen Ihrer Abhängigkeiten auf diese Weise wird manchmal "Version Pinning" genannt.

Das bedeutet, dass Ihr Build-System eine Pull-Request machen muss, um die Lock-Datei zu aktualisieren, und dies gibt Ihnen die Möglichkeit, das Update zu überprüfen und sicherzustellen, dass Sie es akzeptieren möchten.

#### Überprüfung von Updates

Bei der Überprüfung eines Updates auf eine Abhängigkeit sollten Sie überlegen, ob es ein Update ist, das Sie akzeptieren möchten:

- Lesen Sie das Changelog des Releases, um zu verstehen, was es zu bieten scheint (und ob Sie es überhaupt zu diesem Zeitpunkt akzeptieren müssen).
- Prüfen Sie, ob zusätzliche Abhängigkeiten eingeführt werden.
- Falls möglich, prüfen Sie die Quellcode-Updates und sehen, ob einige davon unerklärlich sind oder nicht mit dem Changelog übereinstimmen.
- Überlegen Sie, ob Sie ein wenig warten, bevor Sie das Update vornehmen: oft werden Lieferkettenangriffe schnell von Sicherheitsforschern entdeckt, und es ist besser für Sie, wenn ein Update als bösartig erkannt wird, bevor Sie es angenommen haben.

### Pflege einer Software-Stückliste

Um einen tieferen Einblick in Ihre Abhängigkeiten zu erhalten, können Sie eine detaillierte Inventarliste dieser pflegen. Dies wird als _Stückliste für Software_ (SBOM) bezeichnet.

Eine Lock-Datei ist im Grunde eine Art SBOM, der Begriff "SBOM" bezieht sich jedoch meistens auf ein separates Standardformat zur Darstellung von Abhängigkeiten. Diese Standards sind normalerweise umfangreicher und tiefer als eine Lock-Datei. Das bedeutet:

- Sie können Abhängigkeiten erfassen, wie z. B. Web-Dienste, die nicht in einer Lock-Datei dargestellt sind.
- Sie können zusätzliche Informationen über jede Abhängigkeit erfassen, die nicht in einer Lock-Datei enthalten sind.

Die Verwendung eines Standardformats zur Darstellung eines SBOM bedeutet auch, dass Sie:

- Ihr SBOM mit Drittanbietern teilen können
- Werkzeuge integrieren können, die Ihr SBOM für Zwecke wie die Einhaltung gesetzlicher Vorschriften oder die Überwachung von Schwachstellen verstehen können.

Die beiden gebräuchlichsten Standards zur Darstellung einer Software-Stückliste sind:

- [CycloneDX](https://cyclonedx.org/), ursprünglich entwickelt von [OWASP](https://owasp.org/).
- [SPDX](https://spdx.dev/), gepflegt von der [Linux Foundation](https://www.linuxfoundation.org/).

Beide Standards sind gut unterstützt, und Sie können entweder verwenden, um die SBOM für Ihr Projekt darzustellen. SPDX war ursprünglich darauf ausgerichtet, Produkte dabei zu unterstützen, sicherzustellen, dass sie mit Open-Source-Softwarelizenzen konform sind, hat aber Funktionen hinzugefügt, um Sicherheitsfälle zu unterstützen. CycloneDX ist ein neuerer und leichterer Standard, der von Anfang an auf die Förderung von Versorgungskettensicherheit ausgelegt war.

#### Aufbau einer SBOM

> [!NOTE]
> In diesem Abschnitt verwenden wir CycloneDX als konkretes Beispiel für ein SBOM-Format.
>
> Dieser Abschnitt bietet nur eine kurze Einführung in einige der grundlegendsten Teile des CycloneDX-Objektmodells. Für die vollständigen Details siehe den CycloneDX [Authoritative Guide to SBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-SBOM-en.pdf).

In CycloneDX sind alle Abhängigkeiten entweder _Komponenten_ oder _Dienste_.

- Komponenten umfassen, sind aber nicht beschränkt auf Software-Frameworks, Bibliotheken, Anwendungen und Konfigurationsdaten.
- Dienste stellen externe APIs dar, die Software aufrufen kann, zum Beispiel durch Endpunkt-URIs.

Jede in dem Produkt verwendete Komponente und jeder Dienst, sei es direkt oder indirekt, wird durch ein Objekt im SBOM dargestellt. Das Objekt enthält Informationen über das Element, einschließlich seines Namens, seiner Version, seines Autors, seiner Lizenz, seiner Beschreibung, seiner {{Glossary("hash_function", "Hashes")}} (für Komponenten) und seiner Endpunkt-URIs (für Dienste).

Das SBOM listet auch Schwachstellen auf, die in den Abhängigkeiten des Produkts identifiziert wurden. Jedes Element in der Liste enthält Informationen über diese Schwachstelle, einschließlich einer Beschreibung, einer Reihe von [CWE](https://cwe.mitre.org/index.html)-Codes, Abmilderungen, Links zu Berichten und den Identifikatoren für die Komponenten oder Dienste, die von der Schwachstelle betroffen sind.

#### Erstellen eines SBOM

Sie können ein SBOM für ein Produkt mithilfe eines separaten Tools wie [cdxgen](https://cyclonedx.github.io/cdxgen/#/) oder eines Befehls wie [`npm sbom`](https://docs.npmjs.com/cli/commands/npm-sbom/) generieren. Ein SBOM wird normalerweise im Rahmen des Build-Prozesses generiert, obwohl es auch möglich ist, eines zu anderen Stadien des Software-Lebenszyklus zu erzeugen.

#### Verwendung eines SBOM

Ein SBOM ermöglicht es Ihnen, mehrere Verteidigungsmaßnahmen gegen Lieferkettenangriffe zu implementieren, und wir listen hier drei wichtige auf:

- **Schwachstellenmanagement**: Eines der Hauptverwendungszwecke eines SBOM ist die Reaktion auf Schwachstellen, die in Ihren Abhängigkeiten identifiziert wurden. Sie können Drittanbieter-Tools wie OWASPs [Dependency-Track](https://dependencytrack.org/) verwenden, die dies automatisieren, indem sie Quellen von Schwachstellenberichten wie der [NIST National Vulnerability Database](https://nvd.nist.gov/) oder [GitHub Advisories](https://github.com/advisories) durchsuchen.
- **Integritätsprüfung**: Wenn das SBOM Hashes für Abhängigkeiten enthält, ist es möglich zu überprüfen, dass die Quelle der Komponente, auf die Sie sich verlassen, nicht von ihrer ursprünglichen veröffentlichten Form modifiziert wurde.
- **Lieferantenrisikomanagement**: Durch das Erfassen von Informationen über den Lieferanten Ihrer Abhängigkeiten kann ein SBOM Ihnen helfen zu verstehen, wann Sie sich auf Komponenten oder Dienste von Lieferanten verlassen, die nicht mehr als zuverlässig angesehen werden.

### Verwendung von Subresource Integrity

Viele Websites enthalten extern gehostete Skripte: vor allem, aber nicht ausschließlich, Skripte, die von einem {{Glossary("CDN", "Content Delivery Network (CDN)")}} bereitgestellt werden:

```html
<script src="https://cdn.example.org/library.js"></script>
```

Dies stellt ein Risiko für Ihre Versorgungskette dar: Wenn ein Angreifer die Kontrolle über die Domain `cdn.example.org` erlangt, kann er das Skript durch ein bösartiges Skript ersetzen und damit Ihre Seite kompromittieren.

Externe Skripte, wie andere Software-Abhängigkeiten, sollten Teil Ihres SBOM sein, aber eine zusätzliche Verteidigung besteht darin, das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut des Skripts zu setzen:

```html
<script
  src="https://cdn.example.org/library.js"
  integrity="sha256-d5f450f7ce715d827de27ca569e183f819d33c1e7601875fd61eccbc98f56c5b"></script>
```

Der Wert dieses Attributs enthält einen {{Glossary("hash_function", "kryptographischen Hash")}} der Inhalte des Skripts. Wenn das Skript von einem Angreifer modifiziert wurde, wird der Browser es ablehnen, es zu laden, und Sie sind geschützt.

Dies bedeutet jedoch einen zusätzlichen Wartungsaufwand: Jedes Mal, wenn sich die Quelle ändert (zum Beispiel, jedes Mal, wenn eine neue Version veröffentlicht wird), müssen Sie den Wert des Attributs in Ihrem Code aktualisieren.

Das {{htmlelement("link")}}-Element unterstützt ebenfalls das `integrity`-Attribut, sodass Sie es für CSS-Stylesheets ebenso wie für Skripte verwenden können (und sollten).

Siehe [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) für mehr Details.

## Verteidigungs-Checkliste

- Erfordern Sie {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} für Teammitglieder und minimieren Sie erteilte Berechtigungen.
- Bewerten Sie die Tools, die in Ihren Build-, Test- und Bereitstellungsprozessen beteiligt sind.
- Stellen Sie sicher, dass Pull-Requests überprüft werden und {{Glossary("continuous_integration", "Continuous Integration")}}-Prüfungen bestehen.
- Minimieren Sie Ihre Abhängigkeiten und befolgen Sie einen Prozess zur Bewertung neuer Abhängigkeiten.
- Verwenden Sie eine Lock-Datei, um Updates Ihrer Abhängigkeiten zu steuern, und befolgen Sie einen Prozess zum Akzeptieren von Updates.
- Pflegen Sie ein SBOM und verwenden Sie es, um nach Schwachstellen zu suchen.
- Verwenden Sie Subresource Integrity für extern referenzierte Skripte und Stylesheets.

## Siehe auch

- [Software Supply Chain Security](https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)
- [OpenJS Security Collaboration Space](https://github.com/openjs-foundation/security-collab-space?tab=readme-ov-file#documents--guides) - Ein zentraler Hub für Sicherheitsleitlinien und Ressourcen für das JavaScript-Ökosystem, einschließlich:
  - [SBOM und Supply Chain Security Challenges](https://github.com/openjs-foundation/security-collab-space/blob/main/docs/SBOM/OpenJS-SBOM-CSCRM-Challenges-Recommendations.md) - Empfehlungen für JavaScript SBOM und Softwareattestierung
  - [Security Compliance Guidelines](https://github.com/openjs-foundation/security-collab-space/blob/main/docs/OpenJS_Security_Compliance_Guidelines/v1/readme.md) - Eine umfassende Checkliste für die Betriebssicherheit
  - [npm Security Best Practices Guide](https://github.com/openjs-foundation/security-collab-space/blob/main/docs/npm-security-best-practices.md) - Best Practices zur Absicherung von npm-Paketen und -Abhängigkeiten
  - [Secure Releases Guide](https://github.com/openjs-foundation/security-collab-space/blob/main/docs/Secure_Releases/secure-releases.md) - Richtlinien zur Erstellung sicherer Software-Releases

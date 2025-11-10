---
title: Angriffe auf die Lieferkette
slug: Web/Security/Attacks/Supply_chain_attacks
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Eine _Softwarelieferkette_ besteht aus all der Software und den Werkzeugen, die zur Erstellung und Wartung eines Softwareprodukts verwendet werden. Dies umfasst nicht nur die Software, die für das Produkt selbst entwickelt wurde, sondern auch alle Software und Werkzeuge, die in seiner Produktion verwendet werden.

Bei einem Angriff auf die Lieferkette zielt der Angreifer auf einen Teil der Lieferkette des Produkts ab, um das Produkt selbst zu kompromittieren.

Das offensichtlichste Beispiel hier ist eine Drittanbieter-Bibliothek. Wenn Sie beispielsweise ein [npm](https://www.npmjs.com/)-Paket verwenden, das von einem Drittanbieter entwickelt wurde, hat es die Fähigkeit, Ihre Website zu kompromittieren. Es kann dies absichtlich tun, wenn es böswillig ist, oder versehentlich, wenn es unbeabsichtigte Schwachstellen enthält. Im Wesentlichen müssen Sie Ihren Drittanbieter-Abhängigkeiten genauso vertrauen wie Ihrem eigenen Code.

Weniger offensichtlich gilt dasselbe Prinzip für alle Werkzeuge, die Sie bei der Erstellung Ihrer Software verwenden, einschließlich Code-Editoren, Editor-Plugins, Versionskontrollsystemen, Build-Tools und so weiter. Jedes dieser Werkzeuge könnte im Verlauf der angewandten Transformationen bösartigen oder anfälligen Code in Ihr finales Softwareprodukt einfügen.

In diesem Dokument skizzieren wir Praktiken, um Ihre Softwarelieferkette zu sichern. Es ist in zwei Hauptabschnitte gegliedert:

- [Sicherung Ihrer Entwicklungsumgebung](#sicherung_ihrer_entwicklungsumgebung): Praktiken, um sicherzustellen, dass Ihr eigener Code nicht kompromittiert wird.
- [Verwalten von Drittanbieter-Abhängigkeiten](#verwalten_von_drittanbieter-abhängigkeiten): Praktiken, um sicherzustellen, dass Ihre Abhängigkeiten nicht kompromittiert werden.

## Sicherung Ihrer Entwicklungsumgebung

Ein Weg für einen Angriff auf die Lieferkette ist es, dass ein Angreifer direkt Schwachstellen oder bösartigen Code in Ihr eigenes Produkt einführt. In diesem Abschnitt beschreiben wir einige Praktiken, die diese Bedrohung abwehren können.

### Zugangskontrolle implementieren

Implementieren Sie eine starke Zugangskontrolle für alle, die an dem Projekt arbeiten, einschließlich aller Personen mit Schreibzugriff auf Ihr Code-Repository oder mit Berechtigungen zur Änderung der Build- oder Testkonfiguration. Gute Praktiken umfassen:

- Das Erfordernis von {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} für Teammitglieder.
- Die Beachtung des {{Glossary("principle_of_least_privilege", "Prinzips der minimalen Rechtevergabe")}}: Das heißt, nur denjenigen Teammitgliedern Privilegien zu geben, die sie benötigen, und aktiv die Anzahl der Teammitglieder zu minimieren, die sehr mächtige Berechtigungen erhalten.

### Werkzeuge sichern

Bewerten Sie das Sicherheitsrisiko jedes Werkzeugs, das Sie bei der Produktion Ihrer Website verwenden, einschließlich:

- Texteditoren und IDEs
- Editor-Plugins
- Versionskontrollsysteme
- Alle Werkzeuge, die in Ihre Build-, Test- und Bereitstellungsprozesse involviert sind

Für Open-Source-Software-Abhängigkeiten können Sie den [Concise Guide for Evaluating Open Source Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software) der [OpenSSF](https://openssf.org/) als Leitfaden verwenden.

### Konfiguration sichern

Verstehen und wenden Sie sichere Einstellungen für Ihre Werkzeuge an, insbesondere für Ihr Versionskontrollsystem. Wichtige Schutzmaßnahmen sind:

- Sicherstellen, dass Pull Requests (PRs) durch Überprüfung und ausdrückliche Genehmigung eines Code-Besitzers gehen, bevor sie zusammengeführt werden können.
- Sicherstellen, dass PRs {{Glossary("continuous_integration", "Continuous Integration")}}-Prüfungen bestehen, bevor sie zusammengeführt werden können.
- Erfordernis, dass Commits signiert sind.

Siehe die [Source Code Management Platform Configuration Best Practices](https://best.openssf.org/SCM-BestPractices/) der OpenSSF, die spezifische Checklisten für GitHub und GitLab beinhalten.

## Verwalten von Drittanbieter-Abhängigkeiten

Drittanbieter-Abhängigkeiten umfassen nicht nur Bibliotheken und Frameworks, die Ihr Code verwendet, sondern auch alle Drittanbieter-Tools, die im Entwicklungsprozess involviert sind, einschließlich Editoren, IDEs, Versionskontrollsysteme, Paketmanager und Build-Tools.

Um Probleme mit Drittanbieter-Abhängigkeiten zu mindern, werden wir vier Praktiken besprechen:

1. Bewertung neuer Abhängigkeiten
2. Aktualisierung bestehender Abhängigkeiten
3. Pflege eines _Softwarestückverzeichnisses_ (SBOM)
4. Verwendung von Subresource Integrity für externe Skripte

### Bewertung neuer Abhängigkeiten

Bevor Sie eine neue Abhängigkeit hinzufügen, sollten Sie einschätzen, wie viel Sicherheitsrisiko sie darstellt. Sie müssen sicher sein, dass die Abhängigkeit aktiv gepflegt wird, dass sie eine Historie des Behebens von Problemen und einen Prozess zum Melden und Reagieren auf Sicherheitslücken hat.

Sie sollten in Betracht ziehen, ob das Risiko, die Abhängigkeit hinzuzufügen, die Kosten für die eigene Implementierung der Funktionalität aufwiegt.

Der [Concise Guide for Evaluating Open Source Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software) der [OpenSSF](https://openssf.org/) listet Fragen auf, die Sie stellen sollten, bevor Sie eine neue Abhängigkeit hinzufügen.

### Abhängigkeiten aktualisieren

Sobald Sie eine Abhängigkeit zu Ihrem Projekt hinzugefügt haben, wird der Lieferant der Abhängigkeit typischerweise neue Versionen mit neuen Funktionen, Fehlerbehebungen und Sicherheitsfixes veröffentlichen. Sie möchten normalerweise von diesen Updates profitieren, indem Sie einen Mechanismus implementieren, um die Abhängigkeit aktuell zu halten. Tools wie GitHubs [dependabot](https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide) können dabei helfen, indem sie neue Versionen von Abhängigkeiten erkennen und automatisch Pull Requests öffnen, um Ihr Projekt zu aktualisieren.

Allerdings birgt das allzu eifrige Aktualisieren von Abhängigkeiten auch Risiken. Angenommen, Sie fügen eine Abhängigkeit von einem vertrauenswürdigen Drittanbieter-Paket hinzu. Ein Angreifer übernimmt dann das Konto des Paketentwicklers und veröffentlicht ein bösartiges Update. Wenn Sie das Update sofort akzeptieren, ist Ihr Projekt kompromittiert.

#### Verwendung einer Lockdatei

Der erste Schritt, um Abhängigkeitsupdates zu sichern, besteht darin, eine _Lockdatei_ für Abhängigkeiten zu verwenden, sie in die Versionskontrolle einzuchecken und sie beim Bauen Ihres Projekts zu verwenden.

Paketmanager wie [npm](https://www.npmjs.com/) und [Yarn](https://yarnpkg.com/) erlauben es Ihnen, eine Datei wie [package.json](https://docs.npmjs.com/cli/configuring-npm/package-json/) bereitzustellen, die die Abhängigkeiten Ihres Projekts auflistet. Sie können dann einen Befehl ausführen, der die angegebenen Abhängigkeiten installiert, damit das Projekt sie verwenden kann.

Allerdings bestimmt die Abhängigkeitsliste nicht die genaue Version jedes Pakets: Wenn der Paketliefeanter eine neue Version veröffentlicht, kann diese automatisch in Ihr Projekt aufgenommen werden, wenn es gebaut wird. Wenn die neue Version der Abhängigkeit bösartig ist, kann sie automatisch in Ihr Projekt einbezogen werden, ohne dass Sie es bemerken.

Zum Beispiel, nehmen wir an, Ihre package.json enthält eine Abhängigkeit namens "example-dependency":

```json
{
  "name": "example-project",
  "version": "1.0.0",
  "dependencies": {
    "example-dependency": "^1.0.2"
  }
}
```

Angenommen, der Build-Prozess Ihres Projekts läuft automatisch, wenn Ihre Lieferanten neue Versionen veröffentlichen. Der Build-Prozess startet den Build, indem er `npm install` aufruft. Dies wird die neueste Version von "example-dependency" abrufen, vorbehaltlich des Versionsbereichs `"^1.0.2"`.

Bei Version `1.0.2`, die zu dem Zeitpunkt ist, als Sie sie dem Projekt hinzugefügt haben, ist "example-dependency" ein nützliches, harmloses Paket. Dann übernimmt ein Angreifer das Konto des Entwicklers von "example-dependency" und veröffentlicht eine bösartige Version 1.0.3. Ihr Build-Prozess wird ausgeführt, installiert das bösartige Paket, und Sie sind kompromittiert.

All dies geschah ohne Änderungen an den direkten Artefakten Ihres Projekts oder ohne dass Sie die Gelegenheit hatten, das Update zu überprüfen und zu sehen, ob es verdächtig aussieht.

Die Lösung dafür ist, beim Bauen Ihres Projekts eine Lockdatei zu verwenden. Eine Lockdatei wird automatisch generiert, wann immer die Abhängigkeiten eines Projekts installiert werden, und sie listet die exakten Versionen der direkten und indirekten Abhängigkeiten auf, die in einem Projekt verwendet werden.

Das heißt, wenn _package.json_ Ihnen sagt, dass Ihr Projekt "example-dependency" verwendet, dann wird _package.lock_ Ihnen genau sagen, welche Version von "example-dependency" Sie verwenden sollen, und welche Versionen seine Abhängigkeiten haben.

Die Lockdatei Ihres Projekts sollte in die Versionskontrolle eingecheckt werden. Beim Bauen Ihres Projekts sollten Sie die Lockdatei verwenden, um zu kontrollieren, welche Versionen Ihrer Abhängigkeiten installiert werden: in npm tun Sie dies, indem Sie [`npm ci`](https://docs.npmjs.com/cli/commands/npm-ci/) anstelle von `npm install` verwenden.

> [!NOTE]
> Das Fixieren der Versionen Ihrer Abhängigkeiten auf diese Weise wird manchmal als "Versions-Pinning" bezeichnet.

Das bedeutet, dass Ihr Build-System ein Pull-Request erstellen muss, um die Lockdatei zu aktualisieren, und dies gibt Ihnen die Gelegenheit, das Update zu überprüfen und sicherzustellen, dass Sie es akzeptieren möchten.

#### Überprüfung von Updates

Bei der Überprüfung eines Updates einer Abhängigkeit sollten Sie überlegen, ob es ein Update ist, das Sie akzeptieren möchten:

- Lesen Sie das Änderungsprotokoll für die Veröffentlichung, um zu verstehen, was sie vorgibt anzubieten (und ob Sie es überhaupt zu diesem Zeitpunkt akzeptieren müssen).
- Sehen Sie nach, ob es zusätzliche Abhängigkeiten einführt.
- Wenn möglich, überprüfen Sie die Quellcode-Updates und sehen Sie, ob welche unerklärlich sind oder nicht mit dem Änderungsprotokoll übereinstimmen.
- Erwägen Sie, ein wenig zu warten, bevor Sie ein Update durchführen: Häufig werden Angriffe auf die Lieferkette schnell von Sicherheitsforschern entdeckt, und es ist besser für Sie, wenn ein Update als bösartig befunden wird, bevor Sie es akzeptiert haben.

### Pflege eines Softwarestückverzeichnisses

Um einen tieferen Einblick in Ihre Abhängigkeiten zu bekommen, können Sie ein detailliertes Inventar von ihnen pflegen. Dies wird als _Softwarestückverzeichnis_ (SBOM) bezeichnet.

Eine Lockdatei ist im Grunde eine Art von SBOM: allerdings bezieht sich der Begriff "SBOM" normalerweise auf ein separates Standardformat zur Darstellung von Abhängigkeiten. Diese Standards sind in der Regel sowohl breiter als auch tiefer als eine Lockdatei. Das heißt:

- Sie können Abhängigkeiten erfassen, wie z.B. Webdienste, die in einer Lockdatei nicht dargestellt sind.
- Sie können zusätzliche Informationen über jede Abhängigkeit erfassen, die in einer Lockdatei nicht dargestellt sind.

Die Verwendung eines Standardformats zur Darstellung eines SBOM bedeutet auch, dass Sie:

- Ihr SBOM mit Dritten teilen können
- Werkzeuge integrieren können, die Ihr SBOM verstehen können, zu Zwecken wie regulatorischer Compliance oder Schwachstellenüberwachung.

Die beiden häufigsten Standards zur Darstellung eines Softwarestückverzeichnisses sind:

- [CycloneDX](https://cyclonedx.org/), ursprünglich entwickelt von [OWASP](https://owasp.org/).
- [SPDX](https://spdx.dev/), gepflegt von der [Linux Foundation](https://www.linuxfoundation.org/).

Beide Standards haben gute Unterstützung, und Sie können eines von beiden verwenden, um das SBOM für Ihr Projekt darzustellen. SPDX konzentrierte sich ursprünglich darauf, Produkte bei der Einhaltung von Open-Source-Softwarelizenzen zu unterstützen, hat jedoch neue Funktionen hinzugefügt, um Sicherheitsanwendungsfälle zu unterstützen. CycloneDX ist ein neuerer und leichterer Standard, der von Anfang an auf die Förderung der Sicherheit der Lieferkette ausgerichtet war.

#### Anatomie eines SBOM

> [!NOTE]
> In diesem Abschnitt verwenden wir CycloneDX als konkretes Beispiel für ein SBOM-Format.
>
> Dieser Abschnitt bietet nur eine kurze Einführung in einige der grundlegendsten Teile des CycloneDX-Objektmodells. Für die vollständigen Details siehe den CycloneDX [Authoritative Guide to SBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-SBOM-en.pdf).

In CycloneDX sind alle Abhängigkeiten entweder _Komponenten_ oder _Dienstleistungen_.

- Komponenten umfassen, sind aber nicht beschränkt auf Software-Frameworks, Bibliotheken, Anwendungen und Konfigurationsdaten.
- Dienstleistungen repräsentieren externe APIs, die Software aufrufen kann, zum Beispiel über Endpunkt-URIs.

Jede Komponente und Dienstleistung, die im Produkt entweder direkt oder indirekt verwendet wird, wird durch ein Objekt im SBOM dargestellt. Das Objekt enthält Informationen über das Element, einschließlich seines Namens, seiner Version, seines Autors, seiner Lizenz, seiner Beschreibung, {{Glossary("hash_function", "Hashes")}} (für Komponenten) und Endpunkt-URIs (für Dienstleistungen).

Das SBOM listet auch Schwachstellen auf, die in den Abhängigkeiten des Produkts identifiziert wurden. Jedes Element in der Liste enthält Informationen über diese Schwachstelle, einschließlich einer Beschreibung, einer Menge von [CWE](https://cwe.mitre.org/index.html)-Codes, Maßnahmen zur Schadensbegrenzung, Links zu Beratungshinweisen und den Identifikatoren der Komponenten oder Dienstleistungen, die die Schwachstelle betrifft.

#### Erstellung eines SBOM

Sie können ein SBOM für ein Produkt mit einem separaten Werkzeug wie [cdxgen](https://cyclonedx.github.io/cdxgen/#/) oder einem Befehl wie [`npm sbom`](https://docs.npmjs.com/cli/commands/npm-sbom/) erzeugen. Ein SBOM wird normalerweise als Teil des Build-Prozesses erzeugt, obwohl es möglich ist, eines in anderen Phasen des Software-Lebenszyklus zu erzeugen.

#### Verwendung eines SBOM

Ein SBOM ermöglicht es Ihnen, mehrere Verteidigungen gegen Angriffe auf die Lieferkette zu implementieren, und wir werden hier drei wichtige aufzählen:

- **Schwachstellenmanagement**: Eine der Hauptanwendungen für ein SBOM ist es, auf Schwachstellen zu reagieren, die in Ihren Abhängigkeiten identifiziert wurden. Sie können Drittanbieter-Tools wie OWASPs [Dependency-Track](https://dependencytrack.org/) verwenden, die dies automatisieren, indem sie Quellen von Schwachstellenmeldungen scannen, wie die [NIST National Vulnerability Database](https://nvd.nist.gov/) oder [GitHub Advisories](https://github.com/advisories).
- **Integritätsprüfung**: Wenn das SBOM Hashes für Abhängigkeiten enthält, ist es möglich zu überprüfen, dass die Quelle der Komponente, auf die Sie sich verlassen, nicht von ihrer ursprünglich veröffentlichten Form geändert wurde.
- **Lieferantenrisikomanagement**: Durch das Erfassen von Informationen über den Lieferanten Ihrer Abhängigkeiten kann Ihnen ein SBOM helfen zu verstehen, wann Sie auf Komponenten oder Dienstleistungen von Lieferanten angewiesen sind, die nicht mehr als zuverlässig gelten.

### Verwendung von Subresource Integrity

Viele Websites beinhalten extern gehostete Skripte: vor allem, aber nicht ausschließlich, Skripte, die von einem {{Glossary("CDN", "Content Delivery Network (CDN)")}} bereitgestellt werden:

```html
<script src="https://cdn.example.org/library.js"></script>
```

Dies stellt ein Risiko für Ihre Lieferkette dar: Wenn ein Angreifer Kontrolle über die `cdn.example.org`-Domain erlangt, kann er das Skript durch ein bösartiges Skript ersetzen und damit Ihre Website kompromittieren.

Externe Skripte, wie andere Softwareabhängigkeiten, sollten Teil Ihres SBOM sein, aber eine zusätzliche Verteidigung besteht darin, das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut des Skripts festzulegen:

```html
<script
  src="https://cdn.example.org/library.js"
  integrity="sha256-d5f450f7ce715d827de27ca569e183f819d33c1e7601875fd61eccbc98f56c5b"></script>
```

Der Wert dieses Attributs enthält einen {{Glossary("hash_function", "kryptografischen Hash")}} der Inhalte des Skripts. Wenn das Skript von einem Angreifer modifiziert wurde, wird der Browser es nicht laden, und Sie sind geschützt.

Dies fügt jedoch eine zusätzliche Wartungslast hinzu: Jedes Mal, wenn sich die Quelle ändert (zum Beispiel jedes Mal, wenn eine neue Version veröffentlicht wird), müssen Sie den Wert des Attributs in Ihrem Code aktualisieren.

Das {{htmlelement("link")}}-Element unterstützt ebenfalls das `integrity`-Attribut, sodass Sie es für CSS-Stylesheets ebenso wie für Skripte verwenden können (und sollten).

Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) für weitere Details.

## Verteidigungs-Checkliste

- Erfordern Sie {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} für Teammitglieder und minimieren Sie gewährte Berechtigungen.
- Bewerten Sie Werkzeuge, die in Ihre Build-, Test- und Bereitstellungsprozesse involviert sind.
- Stellen Sie sicher, dass Pull-Requests durch Überprüfungen gehen und {{Glossary("continuous_integration", "Continuous Integration")}}-Prüfungen bestehen.
- Minimieren Sie Ihre Abhängigkeiten und folgen Sie einem Prozess zur Bewertung neuer Abhängigkeiten.
- Verwenden Sie eine Lockdatei, um Updates für Ihre Abhängigkeiten zu kontrollieren, und folgen Sie einem Prozess zur Akzeptanz von Updates.
- Pflegen Sie ein SBOM und verwenden Sie es, um auf Schwachstellen zu überprüfen.
- Verwenden Sie Subresource Integrity für extern referenzierte Skripte und Stylesheets.

## Siehe auch

- [Software Supply Chain Security](https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html) auf [owasp.org](https://owasp.org/)

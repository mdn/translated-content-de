---
title: Zertifikatstransparenz
slug: Web/Security/Defenses/Certificate_Transparency
l10n:
  sourceCommit: 4e989d1d75c8fd0abc43c420002618dbdda8bfbe
---

**Zertifikatstransparenz** ist ein offenes Rahmenwerk, das entwickelt wurde, um sich gegen fehlerhafte Zertifikatsausstellungen zu schützen und diese zu überwachen. Mit der Zertifikatstransparenz werden neu ausgestellte Zertifikate in öffentlich betriebenen, oft unabhängigen _CT-Logs_ 'protokolliert', die einen unveränderlichen, kryptographisch abgesicherten Datensatz der ausgestellten TLS-Zertifikate bereitstellen.

Auf diese Weise können Zertifizierungsstellen (CAs) einer wesentlich größeren öffentlichen Kontrolle und Aufsicht unterzogen werden. Potenziell bösartige Zertifikate, wie solche, die gegen die _Baseline Requirements_ des CA/B-Forums verstoßen, können viel schneller erkannt und widerrufen werden. Browser-Anbieter und Root-Store-Verwalter sind ebenfalls in der Lage, fundiertere Entscheidungen in Bezug auf problematische CAs zu treffen, denen sie möglicherweise das Vertrauen entziehen möchten.

## Hintergrund

CT-Logs basieren auf der Grundlage der _Merkle-Baum_ Datenstruktur. Knoten sind mit den _kryptographischen Hashes_ ihrer Kindknoten beschriftet. Blattknoten enthalten Hashes tatsächlicher Datenstücke. Das Label des Wurzelknotens hängt daher von allen anderen Knoten im Baum ab.

Im Kontext der Zertifikatstransparenz sind die Daten, die von den Blattknoten gehasht werden, die von den verschiedenen heute operierenden CAs ausgestellten Zertifikate. Die Einbeziehung eines Zertifikats kann mithilfe eines _Audit-Beweises_ verifiziert werden, der effizient in logarithmischer O(log n) Zeit generiert und überprüft werden kann.

Die Zertifikatstransparenz entstand ursprünglich im Jahr 2013 vor dem Hintergrund von CA-Kompromittierungen (DigiNotar-Einbruch im Jahr 2011), fragwürdigen Entscheidungen (Trustwave-Zwischenfall mit untergeordnetem Stammzertifikat im Jahr 2012) und technischen Ausgabeproblemen (Ausgabe schwacher 512-Bit-Zertifikate durch DigiCert Sdn Bhd aus Malaysia).

## Implementierung

Wenn Zertifikate in ein CT-Log eingereicht werden, wird ein _Signierter Zertifikatstimestamp_ (SCT) generiert und zurückgegeben. Dies dient als Beweis, dass das Zertifikat eingereicht wurde und in das Log aufgenommen wird.

Die Spezifikation besagt, dass konforme Server eine Anzahl dieser SCTs an TLS-Clients bereitstellen _müssen_, wenn sie eine Verbindung herstellen. Dies kann durch eine Reihe verschiedener Mechanismen erreicht werden:

- X.509v3-Zertifikaterweiterung, die signierte Zertifkatstimestamps direkt in das Leaf-Zertifikat einbettet
- Eine TLS-Erweiterung des Typs `signed_certificate_timestamp`, die während des Handshakes gesendet wird
- OCSP-Stapling (d.h. die TLS-Erweiterung `status_request`) und Bereitstellung einer `SignedCertificateTimestampList` mit einem oder mehreren SCTs

Bei der X.509-Zertifikaterweiterung werden die enthaltenen SCTs von der ausstellenden CA festgelegt. Seit Juni 2021 enthalten die meisten aktiv genutzten und gültigen öffentlich vertrauenswürdigen Zertifikate Transparenzdaten, die in diese Erweiterung eingebettet sind. Diese Methode sollte keine Änderungen an Webservern erfordern.

Bei den letzteren Methoden müssen die Server aktualisiert werden, um die erforderlichen Daten zu senden. Der Vorteil besteht darin, dass der Serverbetreiber die CT-Log-Quellen anpassen kann, die die über die TLS-Erweiterung/OCSP-Stapling gesendeten SCTs bereitstellen.

## Browser-Anforderungen

Google Chrome 107 und später erfordert die Einbeziehung von CT-Logs für alle Zertifikate, die mit einem notBefore-Datum nach dem 30. April 2018 ausgestellt wurden. Benutzern wird der Zugriff auf Websites mit nicht konformen TLS-Zertifikaten verhindert.
Zuvor hatte Chrome die Einbeziehung von CT für _Extended Validation_ (EV) und von Symantec ausgestellte Zertifikate gefordert.

Apple [verlangt](https://support.apple.com/en-gb/103214) eine unterschiedliche Anzahl von SCTs, damit Safari und andere Server serverseitigen Zertifikaten vertrauen.

Firefox Desktop, ab Version 135, und Firefox für Android, ab Version 145, erfordern die Einbeziehung von CT-Logs für alle von Zertifizierungsstellen, die Teil des Root-CA-Programms von Mozilla sind, ausgestellten Zertifikate.

## Spezifikationen

Browser-Implementierungen basieren auf der veralteten Spezifikation {{rfc("6962","Certificate Transparency")}} (Januar 2025).
Die aktuelle Spezifikation ist {{rfc("9162","Certificate Transparency Version 2.0")}}.

## Siehe auch

- [Apples Certificate Transparency Log-Programm](https://support.apple.com/en-us/103703)
- [Chromes Certificate Transparency Log-Richtlinie](https://googlechrome.github.io/CertificateTransparency/log_policy.html)

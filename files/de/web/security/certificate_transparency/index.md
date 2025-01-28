---
title: Certificate Transparency
slug: Web/Security/Certificate_Transparency
l10n:
  sourceCommit: 5b755904cd31e7329ee32ace99486a2fea0fe6a1
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

**Certificate Transparency** ist ein offenes Framework, das entwickelt wurde, um Zertifikatsfehl-Ausstellungen zu verhindern und zu überwachen. Mit Certificate Transparency werden neu ausgestellte Zertifikate in öffentlich betriebenen, oft unabhängigen _CT-Logs_ "protokolliert" — diese führen ein append-only, kryptographisch gesichertes Verzeichnis der ausgestellten TLS-Zertifikate.

Auf diese Weise können Zertifizierungsstellen (CAs) einer viel größeren öffentlichen Überprüfung und Aufsicht unterzogen werden. Potenziell bösartige Zertifikate, wie solche, die gegen die _Baseline Requirements_ des CA/B-Forums verstoßen, können viel schneller erkannt und widerrufen werden. Browseranbieter und Betreiber von Root-Stores können auch fundiertere Entscheidungen bezüglich problematischer CAs treffen, denen sie das Vertrauen entziehen könnten.

## Hintergrund

CT-Logs basieren auf der Grundlage der _Merkle-Baum_-Datenstruktur. Knoten sind mit den _kryptografischen Hashes_ ihrer Kindknoten beschriftet. Blattknoten enthalten Hashes von tatsächlichen Datenstücken. Das Label des Wurzelknotens hängt daher von allen anderen Knoten im Baum ab.

Im Kontext von Certificate Transparency sind die von den Blattknoten gehashten Daten die Zertifikate, die von den verschiedenen heute operierenden CAs ausgestellt wurden. Die Aufnahme eines Zertifikats kann über einen _Audit-Nachweis_ verifiziert werden, der effizient und in logarithmischer O(log n) Zeit erzeugt und verifiziert werden kann.

Certificate Transparency entstand ursprünglich 2013 vor dem Hintergrund von CA-Kompromittierungen (DigiNotar-Verstoß im Jahr 2011), fragwürdigen Entscheidungen (Trustwave-Untergeordneter Root-Vorfall im Jahr 2012) und technischen Ausstellungsproblemen (schwache, 512-Bit Zertifikatsausstellung durch DigiCert Sdn Bhd aus Malaysia).

## Implementierung

Wenn Zertifikate an ein CT-Log übermittelt werden, wird ein _Signed Certificate Timestamp_ (SCT) generiert und zurückgegeben. Dies dient als Nachweis, dass das Zertifikat eingereicht wurde und dem Log hinzugefügt wird.

Die Spezifikation besagt, dass konforme Server verpflichtet sind, eine Anzahl dieser SCTs an TLS-Clients bereitzustellen, wenn diese sich verbinden. Dies kann über verschiedene Mechanismen erreicht werden:

- X.509v3-Zertifikatserweiterung, die signierte Zertifikatstimestamps direkt in das Blattzertifikat einbettet
- Eine TLS-Erweiterung vom Typ `signed_certificate_timestamp`, die während des Handshakes gesendet wird
- OCSP-Stapling (d.h. die `status_request` TLS-Erweiterung) und Bereitstellung einer `SignedCertificateTimestampList` mit einem oder mehreren SCTs

Bei der X.509-Zertifikatserweiterung werden die enthaltenen SCTs von der ausstellenden CA bestimmt. Seit Juni 2021 enthalten die meisten aktiv genutzten und gültigen öffentlich vertrauenswürdigen Zertifikate Transparenztaten, die in diese Erweiterung eingebettet sind. Diese Methode sollte nicht erfordern, dass Webserver modifiziert werden.

Bei den letzteren Methoden müssen Server aktualisiert werden, um die erforderlichen Daten zu senden. Der Vorteil besteht darin, dass der Serverbetreiber die CT-Log-Quellen, die die SCTs über die TLS-Erweiterung/gesicherte OCSP-Antwort bereitstellen, anpassen kann.

## Browser-Anforderungen

Google Chrome 107 und später erfordert die Einbeziehung von CT-Logs für alle Zertifikate, die mit einem notBefore-Datum nach dem 30. April 2018 ausgestellt wurden. Benutzern wird es verwehrt, Websites zu besuchen, die nicht konforme TLS-Zertifikate verwenden. Chrome hatte zuvor die CT-Einbeziehung für _Extended Validation_ (EV) und von Symantec ausgestellte Zertifikate verlangt.

Apple [erfordert](https://support.apple.com/en-gb/103214) eine unterschiedliche Anzahl von SCTs, damit Safari und andere Server Serverzertifikaten vertrauen.

Firefox Desktop ab Version 135 erfordert die CT-Log-Einbeziehung für alle von Zertifizierungsstellen im Mozilla Root CA Program ausgestellten Zertifikate. Firefox für Android erfordert derzeit keine CT-Log-Einbeziehung.

## Spezifikationen

Browser-Implementierungen basieren auf der veralteten Spezifikation {{rfc("6962","Certificate Transparency")}} (Januar 2025). Die aktuelle Spezifikation ist {{rfc("9162","Certificate Transparency Version 2.0")}}.

## Siehe auch

- [Apples Certificate Transparency-Log-Programm](https://support.apple.com/en-us/103703)
- [Chromes Certificate Transparency Log Policy](https://googlechrome.github.io/CertificateTransparency/log_policy.html)

---
title: Certificate Transparency
slug: Web/Security/Certificate_Transparency
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

**Certificate Transparency** ist ein offenes Framework, das dazu dient, sich gegen die Fehlvergabe von Zertifikaten zu schützen und diese zu überwachen. Es ist in [RFC 9162](https://www.rfc-editor.org/rfc/rfc9162) definiert. Mit Certificate Transparency werden neu ausgestellte Zertifikate in öffentlich betriebenen, oft unabhängigen _CT-Logs_ 'protokolliert' — die einen nur anfügbaren, kryptografisch gesicherten Nachweis über ausgestellte TLS-Zertifikate führen.

Auf diese Weise können Zertifizierungsstellen (CAs) einer viel größeren öffentlichen Überprüfung und Aufsicht unterzogen werden. Potenziell bösartige Zertifikate, wie solche, die gegen die _Baseline Requirements_ des CA/B Forums verstoßen, können viel schneller entdeckt und widerrufen werden. Browserhersteller und Root-Store-Betreiber sind zudem in der Lage, fundiertere Entscheidungen in Bezug auf problematische CAs zu treffen, denen sie möglicherweise das Vertrauen entziehen.

## Hintergrund

CT-Logs basieren auf der Grundlage der _Merkle-Baum_ Datenstruktur. Knoten sind mit den _kryptografischen Hashes_ ihrer Kindknoten beschriftet. Blattknoten enthalten Hashes von tatsächlichen Datenelementen. Das Label des Wurzelknotens hängt daher von allen anderen Knoten im Baum ab.

Im Kontext der Certificate Transparency sind die von den Blattknoten gehashten Daten die Zertifikate, die von den verschiedenen heute operierenden CAs ausgestellt wurden. Die Zertifikatsaufnahme kann durch einen _Audit-Nachweis_ überprüft werden, der effizient generiert und verifiziert werden kann, in logarithmischer O(log n) Zeit.

Certificate Transparency entstand ursprünglich im Jahr 2013 vor dem Hintergrund von CA-Kompromittierungen (DigiNotar-Verletzung im Jahr 2011), fragwürdigen Entscheidungen (Trustwave-Zwischenfall mit untergeordnetem Root im Jahr 2012) und technischen Ausstellungsproblemen (schwache, 512-Bit-Zertifikatsausstellung durch DigiCert Sdn Bhd aus Malaysia).

## Implementierung

Wenn Zertifikate in ein CT-Log eingereicht werden, wird ein _signed certificate timestamp_ (SCT) generiert und zurückgegeben. Dies dient als Beweis dafür, dass das Zertifikat eingereicht wurde und in das Log aufgenommen wird.

Die Spezifikation gibt an, dass konforme Server _verpflichtet_ sind, einer Reihe dieser SCTs an TLS-Clients bereitzustellen, wenn sie sich verbinden. Dies kann über verschiedene Mechanismen erreicht werden:

- X.509v3-Zertifikats-Erweiterung, die signierte Zertifikatszeitstempel direkt in das Blattzertifikat einbettet
- Eine TLS-Erweiterung vom Typ `signed_certificate_timestamp`, die während des Handshakes gesendet wird
- OCSP-Stapling (d. h. die `status_request` TLS-Erweiterung) und Bereitstellung einer `SignedCertificateTimestampList` mit einem oder mehreren SCTs

Bei der X.509-Zertifikats-Erweiterung werden die enthaltenen SCTs von der ausstellenden CA entschieden. Seit Juni 2021 enthalten die meisten aktiv verwendeten und gültigen öffentlich vertrauenswürdigen Zertifikate Transparenzdaten, die in dieser Erweiterung eingebettet sind. Diese Methode sollte keine Modifizierung von Webservern erfordern.

Bei den anderen Methoden müssen Server aktualisiert werden, um die erforderlichen Daten zu senden. Der Vorteil besteht darin, dass der Serverbetreiber die CT-Log-Quellen anpassen kann, die die über die TLS-Erweiterung/gestapelte OCSP-Antwort gesendeten SCTs bereitstellen.

## Browser-Anforderungen

Google Chrome erfordert die Einbeziehung in CT-Logs für alle Zertifikate, die mit einem notBefore-Datum nach dem 30. April 2018 zertifiziert sind. Benutzern wird der Zugriff auf Websites mit nicht konformen TLS-Zertifikaten verwehrt. Zuvor hatte Chrome eine CT-Einbeziehung für _Extended Validation_ (EV)- und Symantec-Zertifikate gefordert.

Apple [erfordert](https://support.apple.com/en-gb/103214) eine variierende Anzahl von SCTs, damit Safari und andere serverseitige Anwendungen Serverzertifikaten vertrauen.

Firefox [überprüft](https://bugzil.la/1281469) derzeit nicht, ob CT-Logs für die Websites, die Benutzer besuchen, genutzt werden müssen oder nicht.

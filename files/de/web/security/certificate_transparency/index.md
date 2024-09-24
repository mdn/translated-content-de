---
title: Zertifikattransparenz
slug: Web/Security/Certificate_Transparency
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

**Zertifikattransparenz** ist ein offenes Framework, das entwickelt wurde, um gegen Fehlissuenzen von Zertifikaten zu schützen und diese zu überwachen. Es ist definiert in [RFC 9162](https://www.rfc-editor.org/rfc/rfc9162). Mit Zertifikattransparenz werden neu ausgestellte Zertifikate in öffentlich betriebenen, oft unabhängigen _CT-Logs_ 'protokolliert', die ein nur-anhängbares, kryptografisch gesichertes Protokoll der ausgestellten TLS-Zertifikate führen.

Auf diese Weise können Zertifizierungsstellen (CAs) einer viel stärkeren öffentlichen Kontrolle und Aufsicht unterzogen werden. Potenziell bösartige Zertifikate, wie solche, die die _Baseline Requirements_ des CA/B Forums verletzen, können viel schneller erkannt und widerrufen werden. Browserhersteller und Verwalter von Stammzertifikatsspeichern sind auch in der Lage, besser informierte Entscheidungen hinsichtlich problematischer CAs zu treffen, denen sie möglicherweise das Vertrauen entziehen möchten.

## Hintergrund

CT-Logs basieren auf der Grundlage der Datenstruktur des _Merkle-Baums_. Knotenpunkte sind mit den _kryptografischen Hashes_ ihrer Kindknoten gekennzeichnet. Blattknoten enthalten Hashes von tatsächlichen Datenstücken. Das Label des Wurzelknotens hängt daher von allen anderen Knoten im Baum ab.

Im Kontext der Zertifikattransparenz sind die durch die Blattknoten gehashten Daten die Zertifikate, die von den verschiedenen heute operierenden CAs ausgestellt wurden. Die Einbeziehung von Zertifikaten kann über einen _Auditnachweis_ überprüft werden, der effizient und in logarithmischer O(log n) Zeit generiert und verifiziert werden kann.

Zertifikattransparenz entstand erstmals 2013 vor dem Hintergrund von CA-Kompromittierungen (DigiNotar-Verletzung im Jahr 2011), fragwürdigen Entscheidungen (Trustwave-Untergeordneter-Root-Vorfall im Jahr 2012) und technischen Ausstellungsproblemen (schwache, 512-Bit-Zertifikatausstellung durch DigiCert Sdn Bhd aus Malaysia).

## Implementierung

Wenn Zertifikate an ein CT-Log übermittelt werden, wird ein _signierter Zertifikat-Zeitstempel_ (SCT) generiert und zurückgegeben. Dies dient als Beweis dafür, dass das Zertifikat eingereicht wurde und zum Log hinzugefügt wird.

Die Spezifikation besagt, dass konforme Server einer Reihe dieser SCTs an TLS-Clients bereitstellen _müssen_ , wenn sie sich verbinden. Dies kann über eine Reihe verschiedener Mechanismen erreicht werden:

- X.509v3-Zertifikaterweiterung, die signierte Zertifikatzeitstempel direkt in das Blattzertifikat einbettet
- Eine TLS-Erweiterung des Typs `signed_certificate_timestamp`, die während des Handshakes gesendet wird
- OCSP-Stapling (das heißt, die `status_request` TLS-Erweiterung) und Bereitstellung einer `SignedCertificateTimestampList` mit einem oder mehreren SCTs

Mit der X.509-Zertifikaterweiterung werden die enthaltenen SCTs durch die ausstellende CA bestimmt. Seit Juni 2021 enthalten die meisten aktiv verwendeten und gültigen öffentlich vertrauenswürdigen Zertifikate Transparenzdaten, die in dieser Erweiterung eingebettet sind. Diese Methode sollte keine Modifizierung von Webservern erfordern.

Mit den letzteren Methoden müssen Server aktualisiert werden, um die erforderlichen Daten zu senden. Der Vorteil besteht darin, dass der Serverbetreiber die CT-Log-Quellen anpassen kann, die die SCTs über die TLS-Erweiterung/gestapelte OCSP-Antwort bereitstellen.

## Browser-Anforderungen

Google Chrome erfordert die Einbeziehung von CT-Logs für alle Zertifikate, die nach dem 30. April 2018 mit einem notBefore-Datum ausgestellt wurden. Benutzern wird der Zugriff auf Websites mit nicht konformen TLS-Zertifikaten verweigert. Chrome hatte zuvor die Einbeziehung von CT für _Extended Validation_ (EV) und von Symantec ausgestellten Zertifikaten verlangt.

Apple [erfordert](https://support.apple.com/en-gb/103214) eine unterschiedliche Anzahl von SCTs, damit Safari und andere Server Serverzertifikaten vertrauen.

Firefox [überprüft](https://bugzil.la/1281469) derzeit nicht die Verwendung von CT-Logs oder erfordert sie nicht für besuchte Websites.

import React, { Component } from "react";
import Top from '../top/top';
import ProfileCard from '../profile_card/profile_card';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/row';
import adriana_ocampo from './adriana.jpg';
import carolyn_r_bertozzi from './carolyn_r_bertozzi.jpg';
import cynthia_breazeal from './cynthia_breazeal.jpg';
import elizabeth_blackburn from './elizabeth_blackburn.jpg';
import grace_hopper from './grace.jpg';
import helen_m_blau from './helen_m_blau.jpg';
import irene_au from './irene.jpg';
import katherine_johnson from './katherine_johnson.jpg';
import radia_perlman from './radia.jpg';

export const data = {
    "adriana_ocampo": {
        name: "Adriana Ocampo",
        image: adriana_ocampo,
        text: `<div>
            <p>Adriana C. Ocampo (born January 5, 1955) is a Colombian planetary geologist and
            a Science Program Manager at NASA Headquarters.
            She and her colleagues were the first to identify a ring of cenotes via satellite images,
            the only surface impression of the buried Chicxulub crater.
            This research contributed significantly to the understanding of this impact crater.
            Ocampo has subsequently led at least seven research expeditions to the Chicxulub site.
            As well, in 1996, Ocampo and her colleagues discovered the Aorounga Crater Chain in Chad.
            She continues to search for new impact craters, and with her team, recently reported on a possible crater near Cali,
            Colombia. Ocampo has had an asteroid name after her in recognition of her contributions to space exploration.</p>
            <h3>Early life and education</h3>
            <p>Adriana Christian Ocampo was born on January 5, 1955, in Barranquilla, Colombia.
            Her mother is Teresa Uria Ocampo, and her father is Victor Alberto Ocampo.
            Her family moved to Buenos Aires, Argentina, and then emigrated to Pasadena, California, in 1970,
            at the age of 14, where she was able to study physics and calculus.
            During high school, Ocampo was part of the Jet Propulsion Laboratory (JPL) troop 509.
            In 1973, while a junior in high school, she got a summer job at the Jet Propulsion Laboratory,
            where she analyzed images sent by the Viking spacecraft. In 1980, Ocampo attained U.S. citizenship.
            She began her higher education in aerospace engineering at the Pasadena City College while participating
            in a Jet Propulsion Laboratory sponsored program. Ocampo then transferred to California State University,
            where she changed her major. Ocampo earned her B.S. degree in Geology from California State University,
            Los Angeles in 1983 while working at the Jet Propulsion Laboratory. In 1983, after graduation,
            she accepted a full-time job at the Jet Propulsion Laboratory as a research scientist. She earned her
            M.S. degree in Planetary Geology from California State University,
                Northridge, in 1997, and she finished her Ph.D. at the Vrije Universiteit in Amsterdam in the Netherlands.</p>
            <h3>NASA career</h3>
            <p>Adriana Ocampo currently serves as the led program executive for New Frontiers at the Jet Propulsion Laboratory 
                (JPL). The New Frontiers Program mission is to take the top priorities and goals of 
                the planetary scientific community and address them employing medium-class spacecraft missions 
                that furthers the understanding of the solar system.Some of the missions encompassed in this program 
                are the Juno mission to Jupiter, the New Horizons mission to Pluto and the asteroid sample return mission 
                OSIRIS-REx. She was also the lead NASA scientist in their collaboration with 
                the European Space Agency's Venus Express mission, and with the Japanese Aerospace Exploration Agency's 
                Venus Climate Orbiter mission. In 2010 she wrote the Spanish-language educational publication 
                "El Mundo de Copocuqu: La Reina Gravedad y El Rey Masa" (NASA NP-2010-03-647-HQ).</p>
                <h3>Awards and honors</h3>
                <ul>
                    <li>Ocampo received the Woman of the Year Award in Science from the Comisión Femenil in Los Angeles in 1992. 
                She also received the Advisory Council for Women Award at JPL in 1996 and the Science and Technology Award 
                from the Chicano Federation in 1997.</li>
                    <li>In 2002, Ocampo was named one of the 50 Most Important Women in Science by Discover Magazine.</li>
                    <li>Asteroid 177120 Ocampo Uría, discovered by Marc Buie at the Kitt Peak National Observatory in 2003, 
                    was named after Adriana Ocampo, as noted in the official naming citation of July 11, 2018, from the Minor Planet Center.</li>
                </ul>

        </div>`,

    },
    "carolyn_r_bertozzi": {
        name: "Carolyn Bertozzi",
        image: carolyn_r_bertozzi,
        text: `<div>
            <p>Carolyn Ruth Bertozzi (born October 10, 1966) is an American chemist. 
                Bertozzi is known for founding a new field of chemistry: bioorthogonal chemistry. 
                At Stanford University, she holds the Anne T. and Robert M. Bass Professorship in the School of 
                Humanities and Sciences. Bertozzi is also an Investigator at the Howard Hughes Medical Institute (HHMI) 
                and is the former Director of the Molecular Foundry, a nanoscience research center at 
                Lawrence Berkeley National Laboratory. 
                She received the MacArthur "genius" award at age 33. 
                In 2010, she was the first woman to receive the prestigious Lemelson-MIT Prize faculty award. 
                She is a member of the National Academy of Sciences (2005), the Institute of Medicine (2011), 
                and the National Academy of Inventors (2013). In 2014, it was announced that Bertozzi would lead 
                ACS Central Science, the American Chemical Society's first peer-reviewed open access journal 
                that offers all content free to the public.</p>
                <h3>Biotechnology Startups</h3>
                <p>In addition to her academic work, Bertozzi works actively with biotechnology start-ups. 
                    She has served on the research advisory board of GlaxoSmithKline. 
                    In the early 2000s, Bertozzi and Steve Rosen co-founded Thios Pharmaceuticals the first company 
                    to traget sulfation pathways. In 2008, Bertozzi founded a startup of her own: Redwood Bioscience of Emeryville, 
                    California. Redwood Bioscience is a biotechnology company that uses SMARTag, 
                    a site-specific protein modification technology that allows small drugs to attach to sites on 
                    the proteins and can be used to help fight cancers. Redwood Bioscience was acquired by Catalent 
                    Pharma Solutions in 2014. Bertozzi remains a part of the advisory board for the biologics sector of the company. 
                    In 2014, she co-founded Enable Biosciences which focuses on biotechnologies for at-home diagnoses for type 
                    1 diabetes, HIV, and other diseases. Bertozzi became a co-founder of Palleon Pharma of Waltham, 
                    Massachusetts in 2015. Palleon Pharma focuses on investigating glycoimmune checkpoint inhibitors 
                    as a potential treatment for cancer. In 2017, Bertozzi helped found InterVenn Biosciences, 
                    which uses mass spectrometry and artificial intelligence to enhance glycoproteomics 
                    for target and biomarker discovery, ovarian cancer diagnostics, and predicting the successes and 
                    failures of clinical trials. She co-founded Grace Science Foundation in 2018. 
                    The foundation focuses on curing NGLY1 deficiency through developing therapeutics that are efficient 
                    and inexpensive. In 2019 she co-founded both OliLux Biosciences and Lycia Therapeutics. 
                    OliLux Biosciences develops new methods for tuberculosis detection. The founding of Lycia Therapeutics 
                    occurred when Bertozzi's group discovered lysosome-targeting chimeras (LYTACs). 
                    The new molecule class may be able to degrade some cardiovascular disease and cancer targets. 
                    Lycia Therapeutics focuses on developing technology which utilizes lysosome-targeting chimeras (LYTACs).</p>
                    <h3>Awards and Honors</h3>
                    <ul>
                        <li>Chemistry for the Future Solvay Prize (2020)</li>
                        <li>John J. Carty Award for the Advancement of Science (2020)</li>
                        <li>Foreign Member of the Royal Society (ForMemRS) (2018)</li>
                        <li>Arthur C. Cope Award (2017)</li>
                        <li>UCSF 150th Anniversary Alumni Excellence Awards</li>
                        <li>Hans Bloemendal Award (2013)</li>
                        <li>Elected Fellow of the National Academy of Inventors (2013)</li>
                        <li>Heinrich Wieland Prize (2012)</li>
                        <li>Honorary Doctorate of Science from Brown University (2012)</li>
                        <li>Emanuel Merck Lectureship (2011)</li>
                    </ul>
        </div>`,
    },
    "cynthia_breazeal": {
        name: "Cynthia Breazeal",
        image: cynthia_breazeal,
        text: `<div>
            <p>Cynthia Lynn Breazeal (born November 15, 1967 in Albuquerque, New Mexico) is an Associate Professor 
                of Media Arts and Sciences at the Massachusetts Institute of Technology, 
                where she is the head of the Personal Robots group (formerly the Robotic Life Group) 
                at the MIT Media Lab, and the associate director of strategic initiatives for The Bridge, 
                part of the MIT Quest for Intelligence.[3] She also served as co-director of the Center for 
                Future Storytelling at the Media Lab. She is best known for her work in robotics, 
                where she is recognized as a pioneer of social robotics and human–robot interaction.</p>
                <p>Cynthia Breazeal received her B.S. in Electrical and Computer Engineering from the University of California, 
                    Santa Barbara in 1989, her M.S. in 1993, and her Sc.D. in 2000 in Electrical Engineering and 
                    Computer Science, both from MIT. She developed the robot Kismet as a doctoral thesis under Rodney Brooks, 
                    looking into expressive social exchange between humans and humanoid robots. 
                    Kismet and some of the other robots Breazeal co-developed while a graduate student 
                    at the MIT Artificial Intelligence Lab can now be seen at the MIT Museum. Notable examples 
                    include the upper torso humanoid robot Cog and the insect-like robot Hannibal.</p>
            <h3>Jibo personal assistant robot</h3>
            <p>On July 16, 2014, Breazeal launched an Indiegogo campaign to crowdfund the development of the 
                JIBO personal assistant robot. JIBO reached its initial fundraising goal and was due to launch in 2015, 
                then later pushed to 2016, before finally being released in November 2017. 
                The software development kit expected for developers was never released. 
                On December 15, 2017 the company announced layoffs and in March 2019 it was reported that Jibo robots 
                had announced "Maybe someday when robots are way more advanced than today, 
                and everyone has them in their homes, you can tell yours that I said hello," 
                before permanently shutting down. Breazeal has made no public comments in regard to the closing of Jibo.</p>
            <h3>Awards and recognition</h3>
            <ul>
                <li>Breazeal is recognized as a designer and innovator on the national and global stage. 
                    She received the Gilbreth Lectures Award by the National Academy of Engineering in 2008. 
                    She has received an ONR Young Investigator Award and Technology Review's TR100/35 Award, 
                    TIME magazine's Best Inventions of 2008, and has been honored as a finalist 
                    in the National Design Awards in Communication.</li>
                <li>She has spoken at a number of prominent global events including the World Science Festival, 
                    the World Economic Forum, and TEDWomen. Breazeal is a featured scientist in the 
                    Women's Adventures in Science series (sponsored by the National Academy of Sciences).</li>
                <li>In 2003, Breazeal was recognized as a Finalist in the National Design Awards 
                    in Communication at the White House. In 2014 she was recognized as an entrepreneur as 
                    Fortune Magazine’s Most Promising Women Entrepreneurs, and she was also a recipient 
                    of the L’Oreal USA Women in Digital NEXT Generation Award. The same year, she received the 2014 
                    George R. Stibitz Computer and Communications Pioneer Award for seminal contributions 
                    to the development of Social Robotics and Human Robot Interaction. 
                    In 2015 Breazeal was named by Entrepreneur magazine as a Women to Watch.</li>
            </ul>
        </div>`,

    },
    "elizabeth_blackburn": {
        name: "Elizabeth Blackburn",
        image: elizabeth_blackburn,
        text: `<div>
            <p>Elizabeth Helen Blackburn, (born 26 November 1948) is an Australian-American 
                Nobel laureate who is the former President of the Salk Institute for Biological Studies.
                 Previously she was a biological researcher at the University of California, San Francisco, 
                 who studied the telomere, a structure at the end of chromosomes that protects the chromosome. 
                 In 1984, Blackburn co-discovered telomerase, the enzyme that replenishes the telomere, 
                 with Carol W. Greider. For this work, she was awarded the 2009 Nobel Prize in Physiology or Medicine, 
                 sharing it with Greider and Jack W. Szostak, becoming the first Australian woman Nobel laureate. 
                 She also worked in medical ethics, and was controversially dismissed from the 
                 Bush Administration's President's Council on Bioethics.</p>
            <h3>Career and research</h3>
            <p>During her postdoctoral work at Yale, Blackburn was doing research on the protozoan Tetrahymena thermophila 
                and noticed a repeating codon at the end of the linear rDNA which varied in size. 
                Blackburn then noticed that this hexanucleotide at the end of the chromosome contained a 
                TTAGGG sequence that was tandemly repeated, and the terminal end of the chromosomes were palindromic. 
                These characteristics allowed Blackburn and colleagues to conduct further research on the protozoan. 
                Using the telomeric repeated end of Tetrahymena, Blackburn and colleague Jack Szostak showed the 
                unstable replicating plasmids of yeast were protected from degradation, proving that these sequences 
                contained characteristics of telomeres. This research also proved the telomeric repeats of 
                Tetrahymena were conserved evolutionarily between the species. Through this research, Blackburn 
                and collaborators noticed the replication system for chromosomes was not likely to add to the 
                lengthening of the telomere, and that the addition of these hexanucleotides to the chromosomes 
                was likely due to the activity of an enzyme that is able to transfer specific functional groups. 
                The proposition of a possible transferase-like enzyme led Blackburn and PhD student Carol W. Greider 
                to the discovery of an enzyme with reverse transcriptase activity that was able to fill in the terminal 
                ends of telomeres without leaving the chromosome incomplete and unable to divide without loss of 
                the end of the chromosome. This 1985 discovery led to the purification of this enzyme in lab, 
                showing the transferase-like enzyme contained both RNA and protein components. 
                The RNA portion of the enzyme served as a template for adding the telomeric repeats to the incomplete telomere, 
                and the protein added enzymatic function for the addition of these repeats.Through this breakthrough, 
                the term “telomerase” was given to the enzyme, solving the end-replication process that had troubled 
                scientists at the time.</p>
            <h3>Nobel Prize</h3>
            <p>For their research and contributions to the understanding of telomeres and the enzyme telomerase, 
                Elizabeth Blackburn, Carol Greider, and Jack Szostaks were awarded the 2009 Nobel Prize in Physiology 
                or Medicine. The substantial research on the effects of chromosomal protection from telomerase, 
                and the impact this has on cellular division has been a revolutionary catalyst in the field of 
                molecular biology. For example, the addition of telomerase to cells that do not possess 
                this enzyme has shown to bypass the limit of cellular aging in those cells, thereby linking 
                this enzyme to reduced cellular aging. The addition of telomerase, and the presence of the enzyme 
                in cancer cells has been shown to provide an immunity mechanism for the cell in proliferating, 
                linking the transferase activity to increased cellular growth and reduced sensitivity for cellular signalling. 
                The importance of discovering this enzyme has since sent led her continued research at 
                the University of California San Francisco, where she studies the effect of telomeres and telomerase 
                activity on cellular aging.</p>
        </div>`,

    },
    "grace_hopper": {
        name: "Grace Hopper",
        image: grace_hopper,
        text: `<div>
            <p>Grace Brewster Murray Hopper (née Murray December 9, 1906 – January 1, 1992) 
                was an American computer scientist and United States Navy rear admiral. 
                One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming 
                who invented one of the first linkers. She popularized the idea of machine-independent programming 
                languages, which led to the development of COBOL, an early high-level programming language still in use today.</p>
            <p>Prior to joining the Navy, Hopper earned a Ph.D. in mathematics from Yale University and was a professor 
                of mathematics at Vassar College. Hopper attempted to enlist in the Navy during World War II but 
                was rejected because she was 34 years old. She instead joined the Navy Reserves. Hopper began her 
                computing career in 1944 when she worked on the Harvard Mark I team led by Howard H. Aiken. 
                In 1949, she joined the Eckert–Mauchly Computer Corporation and was part of the team that developed the 
                UNIVAC I computer. At Eckert–Mauchly she began developing the compiler. She believed that a programming 
                language based on English was possible. Her compiler converted English terms into machine code 
                understood by computers. By 1952, Hopper had finished her program linker (originally called a compiler), 
                which was written for the A-0 System. During her wartime service, she co-authored three papers based 
                on her work on the Harvard Mark 1.</p>
            <h3>COBOL</h3>
            <p>In 1954, Eckert–Mauchly chose Hopper to lead their department for automatic programming, 
                and she led the release of some of the first compiled languages like FLOW-MATIC. 
                In 1959, she participated in the CODASYL consortium, which consulted Hopper to guide them in 
                creating a machine-independent programming language. This led to the COBOL language, which was 
                inspired by her idea of a language being based on English words. In 1966, she retired from the 
                Naval Reserve, but in 1967 the Navy recalled her to active duty. She retired from the Navy in 1986 
                and found work as a consultant for the Digital Equipment Corporation, sharing her computing experiences.</p>
            <h3>Awards and recognition</h3>
            <p>The U.S. Navy Arleigh Burke-class guided-missile destroyer USS Hopper was named for her, 
                as was the Cray XE6 "Hopper" supercomputer at NERSC. During her lifetime, 
                Hopper was awarded 40 honorary degrees from universities across the world. 
                A college at Yale University was renamed in her honor. In 1991, she received the National Medal 
                of Technology. On November 22, 2016, she was posthumously awarded the Presidential Medal of 
                Freedom by President Barack Obama.</p>
            <h3>Anecdotes</h3>
            <ul>
                <li>Throughout much of her later career, Hopper was much in demand as a speaker at various computer-related events. 
                    She was well known for her lively and irreverent speaking style, 
                    as well as a rich treasury of early war stories. She also received the nickname "Grandma COBOL".</li>
                <li>While she was working on a Mark II Computer at Harvard University in 1947, 
                    her associates discovered a moth that was stuck in a relay; the moth impeded the operation of the relay. 
                    While neither Hopper nor her crew mentioned the phrase "debugging" in their logs, 
                    the case was held as an instance of literal "debugging." 
                    For many years, the term bug had been in use in engineering. 
                    The remains of the moth can be found in the group's log book at the Smithsonian Institution's 
                    National Museum of American History in Washington, D.C.</li>
                <li>Grace Hopper is famous for her nanoseconds visual aid. People (such as generals and admirals) 
                    used to ask her why satellite communication took so long. 
                    She started handing out pieces of wire that were just under one foot long (11.8 inches (30 cm))—the distance 
                    that light travels in one nanosecond. She gave these pieces of wire the metonym "nanoseconds." 
                    She was careful to tell her audience that the length of her nanoseconds was actually the maximum speed 
                    the signals would travel in a vacuum, and that signals would travel more slowly through the actual 
                    wires that were her teaching aids. Later she used the same pieces of wire to illustrate why computers 
                    had to be small to be fast. At many of her talks and visits, she handed out "nanoseconds" to everyone in 
                    the audience, contrasting them with a coil of wire 984 feet (300 meters) long, representing a microsecond. 
                    Later, while giving these lectures while working for DEC, she passed out packets of pepper, calling 
                    the individual grains of ground pepper picoseconds.</li>
                <li>Jay Elliot described Grace Hopper as appearing to be "'all Navy', but when you reach inside, 
                    you find a 'Pirate' dying to be released".</li>
            </ul>
        </div>`,

    },
    "helen_m_blau": {
        name: "Helen Blau",
        image: helen_m_blau,
        text: `<div>
            <p>Helen Margaret Blau is an American biologist and the Donald E. and Delia B. Baxter Foundation 
                Professor and Director of the Baxter Laboratory for Stem Cell Biology at Stanford University 
                School of Medicine. She is known for establishing the reversibility of the mammalian differentiated state. 
                Her landmark papers showed that nuclear reprogramming and the activation of novel programs of 
                gene expression were possible, overturning the prevailing view that the differentiated state was 
                fixed and irreversible. Her discoveries opened the door for cellular reprogramming and 
                its application to stem cell biology.</p>
            <p>Helen Blau was born in London and is a dual citizen of the United States and Great Britain. 
                She earned a B.A. from the University of York in England and an M.A. and Ph.D. in biology from 
                Harvard University with Fotis C. Kafatos. After a postdoctoral fellowship with Charles J. 
                Epstein in the Departments of Biochemistry and Biophysics and the Division of Medical Genetics at UCSF, 
                she joined the faculty at Stanford University in 1978. She was awarded an endowed chair in 1999 and 
                named Director of the Baxter Laboratory for Stem Cell Biology in 2002. Blau is known for her support of 
                women in science and success in mentoring numerous young scientists who comprise the next 
                generation of academic leaders in muscle biology and regenerative medicine.</p>
            <h3>Current research</h3>
            <p>Dr. Blau's ongoing research focuses on cellular reprogramming, therapeutic interventions to enhance 
                stem cell function in muscle regeneration, and cell rejuvenation strategies.</p>
            <h3>Public service and advisory committees</h3>
            <p>Helen Blau has contributed to multiple national and international committees and boards. 
                She served on the Congressional Liaison Committee for Public Policy for the American Society for Cell Biology. 
                At NIH she served on the (RAC) Oversight Committee of Gene Therapy (created by Harold Varmus) 
                and as a member of the Council of the National Institute on Aging. 
                She has been a member of the Harvard Board of Overseers and the Board of Directors of the 
                American Society of Gene Therapy and the Council of the National Academy of Medicine of the 
                National Academy of Sciences. She has advised the Conseil Stratégique de l’Association 
                Française contre les Myopathies (AFM) and served on the Scientific Advisory Boards of the Helmsley 
                Trust and the Ellison Medical Foundation. She currently serves on the Pew Charitable Trust Scholars 
                Advisory Committee and the Council of the American Academy of Arts and Sciences.</p>
            <h3>Honors</h3>
            <ul>
                <li>Elected Member of the American Philosophical Society (2018)</li>
                <li>Elected Member of the National Academy of Inventors (2017)</li>
                <li>Ordinary Member of the Pontifical Academy of Sciences (named by Pope Francis, Saturday, November 4, 2017)</li>
                <li>Elected Member of the National Academy of Sciences (2016)</li>
                <li>The Glenn Award for Research in Biological Mechanisms of Aging (2015)</li>
                <li>Stanford Office of Technology Licensing Outstanding Inventor Award (2015)</li>
                <li>NIH Director's Transformative Research Award (2012-2017)</li>
                <li>American Association for Cancer Research - Irving Weinstein Foundation Outstanding Innovations Award (2011)</li>
                <li>Rolf-Sammet Professorship (2003), Frankfurt, Germany</li>
                <li>Honorary Doctorate, University of Nijmegen, the Netherlands (2003)</li>
            </ul>
        </div>`,

    },
    "irene_au": {
        name: "Irene Au",
        image: irene_au,
        text: `<div>
            <p>Irene is an operating partner at Khosla Ventures, working with portfolio companies to make their 
                design and UX great. She builds high performing teams, establish design practices, 
                mentor and grow the next generation of great designers, and design interfaces and experiences. 
                She drives strategic discussions at the highest levels of companies, focusing first on user needs 
                to inspire product innovation.</p>
            <h3>interaction Design</h3>
            <p>Irene has unprecedented experience elevating the strategic importance of design within internet companies, 
                having built and led the entire User Experience and Design teams at Google (2006–2012), 
                Yahoo! (1998–2006), and Udacity (2012–2014). She began her career as an interaction designer at 
                Netscape Communications, where she worked on the design of the internet’s first commercial web browser. 
                Irene also teaches yoga at Avalon Yoga Center in Palo Alto where she is among the teacher 
                training program faculty.</p>
            <h3>Yoga</h3>
            <p>She has authored the definitive book on design in venture capital, published by O’Reilly, 
                Design in Venture Capital, and has been featured in Wired magazine, Fast Company magazine, 
                and on the cover of Mindful magazine.</p>
        </div>`,

    },
    "katherine_johnson": {
        name: "Katherine Johnson",
        image: katherine_johnson,
        text: `<div>
            <p>Katherine Johnson (August 26, 1918 – February 24, 2020), was an American mathematician whose 
            calculations of orbital mechanics as a NASA employee were critical to the success of the first 
            and subsequent U.S. crewed spaceflights. During her 35-year career at NASA and its predecessor, 
            she earned a reputation for mastering complex manual calculations and helped pioneer the use of 
            computers to perform the tasks. The space agency noted her "historical role as one of the first 
            African-American women to work as a NASA scientist".</p>
            <p>Johnson's work included calculating trajectories, launch windows, and emergency return paths for 
                Project Mercury spaceflights, including those for astronauts Alan Shepard, 
                the first American in space, and John Glenn, the first American in orbit, and rendezvous paths 
                for the Apollo Lunar Module and command module on flights to the Moon. 
                Her calculations were also essential to the beginning of the Space Shuttle program, 
                and she worked on plans for a mission to Mars.</p>
            <p>In 2015, President Barack Obama awarded Johnson the Presidential Medal of Freedom. 
                In 2016, she was presented the Silver Snoopy Award by NASA astronaut Leland D. Melvin and a 
                NASA Group Achievement Award. She was portrayed by Taraji P. Henson as a lead character 
                in the 2016 film Hidden Figures. In 2019, Johnson was awarded the Congressional Gold Medal.</p>
            <h3>Awards</h3>
            <ul>
                <li>2015, NCWIT Pioneer in Tech Award</li>
                <li>2016, Silver Snoopy award from Leland Melvin</li>
                <li>2016, Astronomical Society of the Pacific's Arthur B.C. Walker II Award</li>
                <li>2016, Presidential Honorary Doctorate of Humane Letters from West Virginia University, Morgantown, West Virginia[</li>
                <li>On December 1, 2016, Johnson received the Langley West Computing Unit NASA Group Achievement 
                    Award at a reception at the Virginia Air and Space Center. 
                    Other awardees included her colleagues, Dorothy Vaughan and Mary Jackson.</li>
                <li>2017, Daughters of the American Revolution (DAR) Medal of Honor</li>
                <li>2017, Honorary Doctorate from Spelman College</li>
                <li>May 12, 2018, Honorary Doctorate of Science from the College of William and Mary, Williamsburg, Virginia</li>
                <li>On April 29, 2019, the University of Johannesburg and its Faculty of Science conferred Johnson with 
                    the degree of Philosophiae Doctor Honoris causa for her pioneering role at NASA.</li>
                <li>November 8, 2019, Congressional Gold Medal</li>
            </ul>
        </div>`,

    },
    "radia_perlman": {
        name: "Radia Perlman",
        image: radia_perlman,
        text: `<div>
            <p>Radia Joy Perlman (born December 18, 1951) is an American computer programmer and network engineer. 
                She is most famous for her invention of the spanning-tree protocol (STP), 
                which is fundamental to the operation of network bridges, while working for Digital Equipment Corporation. 
                She also made large contributions to many other areas of network design and standardization, 
                such as link-state routing protocols.</p>
            <p>More recently she has invented the TRILL protocol to correct some of the shortcomings of spanning-trees. 
                She is currently employed by Dell EMC.</p>
            <h3>Career</h3>
            <p>She is most famous for her invention of the Spanning Tree Protocol (STP), 
                which is fundamental to the operation of network bridges, while working for Digital 
                Equipment Corporation. Perlman is the author of a textbook on networking and coauthor 
                of another on network security. She holds more than 100 issued patents. 
                She was a Fellow at Sun Microsystems and has taught courses at the University of Washington, 
                Harvard University and MIT, and has been the keynote speaker at events all over the world. 
                Perlman is the recipient of awards such as Lifetime Achievement awards from Usenix and the 
                Association for Computing Machinery’s Special Interest Group on Data Communication (SIGCOMM).</p>
            <h3>Awards</h3>
            <ul>
                <li>National Inventors Hall of Fame induction (2016)</li>
                <li>Internet Hall of Fame induction (2014)</li>
                <li>SIGCOMM Award (2010)</li>
                <li>USENIX Lifetime Achievement Award (2006)</li>
                <li>Recipient of the first Anita Borg Institute Women of Vision Award for Innovation in 2005</li>
                <li>Silicon Valley Intellectual Property Law Association Inventor of the year (2003)</li>
                <li>Honorary Doctorate, Royal Institute of Technology (June 28, 2000)</li>
                <li>Twice named as one of the 20 most influential people in the industry by Data Communications magazine: 
                    in the 20th anniversary issue (January 15, 1992) and the 25th anniversary issue (January 15, 1997). 
                    Perlman is the only person to be named in both issues.</li>
                <li>Fellow of the Association for Computing Machinery, class of 2016</li>
            </ul>
        </div>`,
    }
}

class Profiles extends Component {
    render() {
        return (
            <div>
                <Top title="INSPIRED BY WOMEN"></Top>
                <br/>
                <Container className="justify-content-center">
                    <Row className="justify-content-center">
                        {this.render_card("adriana_ocampo")}
                        {this.render_card("carolyn_r_bertozzi")}
                        {this.render_card("cynthia_breazeal")}
                        {this.render_card("elizabeth_blackburn")}
                        {this.render_card("grace_hopper")}
                        {this.render_card("helen_m_blau")}
                        {this.render_card("irene_au")}
                        {this.render_card("katherine_johnson")}
                        {this.render_card("radia_perlman")}
                    </Row>
                </Container>
            </div>
        )
    }

    render_card(id) {
        return (
                <a href="javascript:void(0);" onClick={() => this.props.profileSelected(id, "")}>
                    <ProfileCard image={data[id]["image"]} title={data[id]["name"]} />
                </a>
        )
    }
}

export default Profiles;